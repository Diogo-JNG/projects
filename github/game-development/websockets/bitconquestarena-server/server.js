const WebSocket = require('ws');
const http = require('http');
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT || 8080;
const MAX_PLAYERS_PER_ROOM = 2;

const server = http.createServer((req, res) => {
  req.url === '/healthz' ? res.end('OK') : res.end('Not Found');
});

const wss = new WebSocket.Server({ server });

// Estrutura de gerenciamento de salas
const lobby = {
  rooms: new Map(),
  findAvailableRoom() {
    for (const [roomId, room] of this.rooms) {
      if (room.players.size < MAX_PLAYERS_PER_ROOM) return roomId;
    }
    return this.createNewRoom();
  },
  createNewRoom() {
    const roomId = uuidv4();
    this.rooms.set(roomId, {
      players: new Map(),
      projectiles: new Map()
    });
    return roomId;
  }
};

wss.on('connection', (ws) => {
  ws.roomId = null; // Sala atual do cliente
  let id = null;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      // Variável room declarada aqui e atualizada conforme necessário
      let room = ws.roomId && lobby.rooms.has(ws.roomId) ? lobby.rooms.get(ws.roomId) : null;

      switch (data.type) {
        case 'join_game':
          id = uuidv4();
          ws.roomId = lobby.findAvailableRoom();
          room = lobby.rooms.get(ws.roomId);

          room.players.set(id, {
            x: 0,
            y: 0,
            health: 100,
            name: data.name,
            class: data.class,
            animation: 'idle',
            weaponX: 0,
            weaponY: 0,
            weaponAngle: 0,
            weaponAnimation: 'idle',
            active: true
          });

          ws.send(JSON.stringify({
            type: 'game_state',
            roomId: ws.roomId,
            id: id,
            players: Object.fromEntries(room.players),
            projectiles: Object.fromEntries(room.projectiles)
          }));

          broadcastToRoom(ws.roomId, {
            type: 'player_connected',
            id: id,
            ...room.players.get(id)
          }, ws);
          break;

        case 'damage_player':
          if (!room) return;
          broadcastToRoom(ws.roomId, {
            type: 'player_damaged',
            attackerId: id,
            targetId: data.targetId,
            damage: data.damage
          });
          break;

        case 'heal_player':
          if (!room) return;
          broadcastToRoom(ws.roomId, {
            type: 'player_healed',
            healerId: id,
            targetId: data.targetId
          });
          break;

        case 'player_update':
          if (!room) return;
          const player = room.players.get(id);

          Object.assign(player, {
            x: data.x,
            y: data.y,
            health: data.health,
            animation: data.animation,
            weaponX: data.weaponX,
            weaponY: data.weaponY,
            weaponAngle: data.weaponAngle,
            weaponAnimation: data.weaponAnimation
          });

          broadcastToRoom(ws.roomId, {
            type: 'player_updated',
            id: id,
            ...player
          }, ws);
          break;

        case 'projectile_launch':
          if (!room) return;
          broadcastToRoom(ws.roomId, {
            type: 'projectile_spawned',
            x: data.x,
            y: data.y,
            angle: data.angle,
            id: id
          });
          break;

        case 'hide_request':
          if (!room) return;
          const hidePlayer = room.players.get(id);

          if (hidePlayer?.active) {
            hidePlayer.active = false;
            broadcastToRoom(ws.roomId, {
              type: 'player_hidden',
              id: id
            });
          }
          break;

        case 'respawn_request':
          if (!room) return;
          const respawnPlayer = room.players.get(id);

          if (respawnPlayer && !respawnPlayer.active) {
            respawnPlayer.active = true;
            respawnPlayer.health = 100;
            broadcastToRoom(ws.roomId, {
              type: 'player_respawned',
              id: id,
              ...respawnPlayer
            });
          }
          break;

        case 'chat_message':
          if (!room) return;
          broadcastToRoom(ws.roomId, {
            type: 'chat_message',
            sender: room.players.get(id)?.name || "Desconhecido",
            message: data.message
          }, ws);
          break;
      }
    } catch (error) {
      console.error("Erro ao processar mensagem:", error);
    }
  });

  ws.on('close', () => {
    if (ws.roomId && lobby.rooms.has(ws.roomId)) {
      const room = lobby.rooms.get(ws.roomId);

      if (room.players.has(id)) {
        room.players.delete(id);
        broadcastToRoom(ws.roomId, {
          type: 'player_disconnected',
          id: id
        });
      }

      if (room.players.size === 0) {
        lobby.rooms.delete(ws.roomId);
        console.log(`Sala ${ws.roomId} removida por estar vazia`);
      }
    }
  });
});

// Função de broadcast melhorada
function broadcastToRoom(roomId, message, exceptWs = null) {
  wss.clients.forEach(client => {
    if (
      client.readyState === WebSocket.OPEN &&
      client.roomId === roomId &&
      client !== exceptWs
    ) {
      client.send(JSON.stringify(message));
    }
  });
}

// Graceful shutdown para Fly.io
process.on('SIGTERM', () => {
  console.log('Encerrando servidor...');
  wss.close();
  server.close(() => process.exit(0));
});

server.listen(port, () => {
  console.log(`🟢 Servidor operacional na porta ${port}`);
});
