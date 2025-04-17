const WebSocket = require('ws');
const http = require('http');
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200);
    res.end('OK');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const wss = new WebSocket.Server({ server });

let players = {};
let projectiles = {};

wss.on('connection', (ws) => {
  let playerId = null;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      switch (data.type) {
        case 'request_id':
          playerId = uuidv4();
          players[playerId] = {
            x: 0,
            y: 0,
            animation: 'idle',
            weaponX: 0,
            weaponY: 0,
            weaponAngle: 0,
            weaponAnimation: 'idle',
            name: data.name,
            class: data.class,
            health: 100,
            active: true,
            timestamp: Date.now()
          };

          console.log(`Novo jogador conectado! Total: ${Object.keys(players).length}`);

          ws.send(JSON.stringify({
            type: 'player_init',
            id: playerId,
            players: players,
            class: data.class
          }));

          broadcastToOthers({
            type: 'player_connected',
            id: playerId,
            x: 0,
            y: 0,
            animation: 'idle',
            name: players[playerId].name,
            class: players[playerId].class,
            health: 100,
            active: true
          });
          break;

        case 'update':
          if (!players[playerId]) return;

          players[playerId] = {
            ...players[playerId],
            x: data.x,
            y: data.y,
            animation: data.animation,
            weaponX: data.weaponX,
            weaponY: data.weaponY,
            weaponAngle: data.weaponAngle,
            weaponAnimation: data.weaponAnimation,
            health: data.health,
            timestamp: Date.now()
          };

          broadcastToOthers({
            type: 'player_update',
            id: playerId,
            x: data.x,
            y: data.y,
            animation: data.animation,
            weaponX: data.weaponX,
            weaponY: data.weaponY,
            weaponAngle: data.weaponAngle,
            weaponAnimation: data.weaponAnimation,
            health: data.health
          });
          break;

        case 'heal_player': // ✅ Sistema de cura
          if (players[data.targetId]) {
            broadcast({
              type: 'player_healed',
              healerId: playerId,
              targetId: data.targetId
            });
          }
          break;

        case 'hide_request':
          if (players[playerId]?.active) {
            players[playerId].active = false;
            broadcast({ type: 'player_hidden', id: playerId });
          }
          break;

        case 'respawn_request':
          if (players[playerId] && !players[playerId].active) {
            players[playerId].active = true;
            broadcast({ type: 'player_respawn', id: playerId });
          }
          break;

        case 'projectile_launch':
          const projectileId = uuidv4();
          projectiles[projectileId] = {
            x: data.x,
            y: data.y,
            angle: data.angle,
            id: playerId,
            timestamp: Date.now()
          };

          broadcast({
            type: 'projectile_spawn',
            id: projectileId,
            x: data.x,
            y: data.y,
            angle: data.angle,
            id: playerId
          });
          break;

        case 'chat_message':
          broadcast({
            type: 'chat_message',
            sender: players[playerId]?.name || "Desconhecido",
            message: data.message
          });
          break;
      }

    } catch (error) {
      console.error("Erro ao processar mensagem:", error);
    }
  });

  const broadcast = (message) => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  };

  const broadcastToOthers = (message) => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  };

  ws.on('close', () => {
    console.log(`Jogador desconectado! Total: ${Object.keys(players).length}`);
    if (players[playerId]) {
      const disconnectedPlayerName = players[playerId].name;
      delete players[playerId];

      console.log(`Jogador desconectado! Total: ${Object.keys(players).length}`);

      // Notifica todos os clientes sobre a desconexão
      broadcast({
        type: 'player_disconnected',
        id: playerId, // ID do jogador desconectado
        name: disconnectedPlayerName // Nome do jogador desconectado
      });
    }
  });
});

process.on('SIGTERM', () => {
  console.log('Recebido SIGTERM, encerrando servidor...');
  wss.close();
  server.close(() => process.exit(0));
});


server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
