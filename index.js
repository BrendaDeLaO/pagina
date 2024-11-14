//Importar la libreria  
const express = require('express');  

//Agrega  
const PORT = 3000;  

//Objetos para llamar los metodos de express  
const app = express();  
const mysql = requiere('mysql');
const connection = 

//Ruta de archivos estáticos  
app.use(express.static("public"));  

// escucha conexiones en el puerto 3000 y muestra por consola la direccion web.  
app.listen(PORT, () => console.log(`http://54.91.34.241:${PORT}`));
