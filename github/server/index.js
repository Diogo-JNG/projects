const express = require('express');
const { EventEmitter } = require('ws');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const PORT = process.env.PORT || 3030;
let playerIDS = [];
let maxPlayers = 0;

const server = express().listen(PORT, () => {
  console.log(`Listening on:${PORT}`);
});

const wss = new SocketServer({ server });

wss.on('connection', (ws, req) => {
  maxPlayers++;
  const ip = req.socket.remoteAddress;
  console.log('a client connected')

  ws.on('close', () => {
    maxPlayers--;
    console.log('a client disconnected');
    wss.clients.forEach(function each(client) {
        client.send("refresh_list");
    });
    playerIDS = [];
  })
  ws.addEventListener('message', e => {
    if (e.data === 'update_players') {
      ws.send(`Players:` + maxPlayers);
    }
    else if (e.data.includes('myID:')) {
      playerIDS.push(e.data.substring(5))
    }
    else if (e.data.includes('sendIDS')) {
      for (let i = 0; i < playerIDS.length; i++) {
        ws.send("allIDS:" + playerIDS[i]);
      }
    }
  })

  //  Client send data to all clients
  ws.on('message', function message(data) {
    wss.clients.forEach(function each(client) {
      if (data == "ask_join") {
        client.send("change_scene");
      }
    });
  });

});
