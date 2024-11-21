const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 4000;  // Asegúrate de que esto sea correcto

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'team05.c7wkc62gg6v0.us-east-1.rds.amazonaws.com',
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

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
