const express = require('express');
const path = require('path');
const app = express();
const port = 3005;


app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://54.162.70.89:${port}`);
});