// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log('Pengguna terhubung.');

  ws.on('message', function incoming(message) {
    // Kirim ke semua client
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Pengguna keluar.');
  });
});
