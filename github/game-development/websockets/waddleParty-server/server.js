const WebSocket = require('ws');
const http = require('http'); // Adicionado para criar um servidor HTTP
const { v4: uuidv4 } = require('uuid'); // Biblioteca para gerar IDs únicos

// Porta dinâmica fornecida pelo Fly.io ou padrão 8080
const port = process.env.PORT || 8080;

// Criação do servidor HTTP básico (necessário para Fly.io)
const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200);
    res.end('OK'); // Endpoint de health check
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Inicializa o servidor WebSocket
const wss = new WebSocket.Server({ server });

let players = {}; // Armazena os dados de todos os jogadores

wss.on('connection', (ws) => {
  console.log("Novo jogador conectado!");
  let playerId = null;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      switch (data.type) {
        case 'request_id':
          // Processa o nome e a cor do jogador
          playerId = uuidv4();
          players[playerId] = {
            x: 0,
            y: 0,
            animation: 'idle',
            name: data.name,
            color: data.color,
            timestamp: Date.now()
          };

          ws.send(JSON.stringify({
            type: 'player_init',
            id: playerId,
            players: players
          }));

          wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                type: 'player_connected',
                id: playerId,
                x: players[playerId].x,
                y: players[playerId].y,
                animation: players[playerId].animation,
                name: players[playerId].name,
                color: players[playerId].color
              }));
            }
          });
          break;

        case 'chat_message':
          // Retransmite a mensagem para todos os jogadores
          const chatData = JSON.stringify({
            type: 'chat_message',
            sender: players[playerId]?.name || "Desconhecido",
            message: data.message
          });

          wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(chatData);
            }
          });

          console.log(`Mensagem de ${players[playerId]?.name || "Desconhecido"}: ${data.message}`);
          break;

        case 'update':
          // Atualiza posição e animação do jogador
          if (!players[playerId]) return;

          players[playerId] = {
            ...players[playerId],
            x: data.x,
            y: data.y,
            animation: data.animation,
            timestamp: Date.now()
          };

          const updateData = JSON.stringify({
            type: 'player_update',
            id: playerId,
            x: data.x,
            y: data.y,
            animation: data.animation
          });

          wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(updateData);
            }
          });
          break;

        default:
          console.warn(`Tipo desconhecido recebido de ${playerId}: ${data.type}`);
      }

    } catch (error) {
      console.error("Erro ao processar mensagem:", error);
    }
  });

  ws.on('close', () => {
    console.log(`Jogador desconectado: ${playerId}`);
    if (players[playerId]) {
      const playerName = players[playerId].name; // Captura o nome do jogador
      delete players[playerId];

      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: 'player_disconnected',
            id: playerId,
            name: playerName
          }));
        }
      });
    }
  });
});

// Limpeza de jogadores inativos
setInterval(() => {
  const now = Date.now();
  Object.keys(players).forEach(id => {
    if (now - players[id].timestamp > 60000) { // Remove jogadores inativos após 60 segundos
      console.log(`Jogador inativo removido: ${id}`);
      delete players[id];

      // Notifica todos sobre a remoção do jogador inativo
      const inactiveData = JSON.stringify({
        type: 'player_disconnected',
        id: id
      });

      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(inactiveData);
        }
      });
    }
  });
}, 10000);

// Inicia o servidor HTTP e WebSocket na porta especificada
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

// Tratamento de SIGTERM para desligamento adequado no Fly.io
process.on('SIGTERM', () => {
  console.log('Recebido SIGTERM, encerrando servidor...');
  wss.close();
  server.close(() => process.exit(0));
});
