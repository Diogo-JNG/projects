const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let ipList = [];

// Function to clear the IP list and notify clients
function clearIPList() {
  ipList = [];
  console.log("IP list cleared, sending UpdateCheck to all clients");
  
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send("UpdateCheck");
    }
  });
}

// Set interval to clear the list every 10 seconds
setInterval(clearIPList, 10000);

// Log current IP list every 3 seconds
setInterval(() => {
  console.log("Current IP List:", ipList);
}, 3000);

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    // Convert buffer to string if it's a buffer
    const msgString = Buffer.isBuffer(message) ? message.toString('utf8') : message.toString().trim();
    console.log('Received message:', msgString);

    if (msgString.startsWith("AddMe&")) {
      const ip = msgString.split("&")[1];
      if (ip && !ipList.includes(ip)) {
        ipList.push(ip);
        console.log(`Added new IP: ${ip}`);
        ws.send(`IP ${ip} added successfully`);
      } else {
        ws.send(`IP ${ip} already in the list or invalid`);
      }
    } else if (msgString.startsWith("SendList&")) {
      if (ipList.length === 0) {
        ws.send("NoRooms");
      } else {
        ws.send("FirstOnList" + "/" + ipList[0]);
      }
      console.log("Sent response to client");
    } else if (msgString.startsWith("RemoveMe$")) {
      const ip = msgString.split("$")[1];
      const index = ipList.indexOf(ip);
      if (index > -1) {
        ipList.splice(index, 1);
        console.log(`Removed IP: ${ip}`);
        ws.send(`IP ${ip} removed successfully`);
      } else {
        ws.send(`IP ${ip} not found in the list`);
      }
    } else {
      console.log("Unrecognized message format:", msgString);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
