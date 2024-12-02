const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 4001;  // Asegúrate de que esto sea correcto

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'bd05.cdggooyqe936.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'team983447196',
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
  console.log(`Servidor corriendo en http://54.162.70.89:${port}`);
});
