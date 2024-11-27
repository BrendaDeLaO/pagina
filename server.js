const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3005;


app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

------------------------------------------------------------------

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'team05.ctes6auum80u.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'equipo05',
  database: 'consultation'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos.');
});

// Ruta para manejar la solicitud POST del formulario
app.post('/enviar', (req, res) => {
  const { nombre, apellido, correo, numero, motivo } = req.body;
  const sql = 'INSERT INTO user (name, last_name, email, phone_number, reason) VALUES (?, ?, ?, ?, ?)';

  connection.query(sql, [nombre, apellido, correo, numero, motivo], (err, result) => {
    if (err) {
      console.error('Error guardando en la base de datos:', err);
      res.status(500).send('Error guardando en la base de datos');
      return;
    }
    res.send('Registro guardado correctamente');
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
