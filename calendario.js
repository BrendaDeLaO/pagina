const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'team05.cdekvtdvpspo.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'equipo05',
  database: 'holiday', // Asegúrate de reemplazar esto con el nombre correcto de tu base de datos
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

app.get('/data', (req, res) => {
  const query = 'SELECT id_holiday, holiday_date, holiday_name ,ods_related FROM festividades';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      console.error('Consulta:', query); // Añadir detalles de la consulta
      res.status(500).send('Error en la base de datos');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
