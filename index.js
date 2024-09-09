const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require("cors");
// Crear servidor express
const app = express();

app.use(cors());
// Directorio publico
// app.use(express.static('public'))

// Middleware para servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Carga el archivo HTML principal
});

app.use('/api', require('./src/routes/news.routes'))


// Escuchar peticiones
app.listen(process.env.PORT, ()=>{
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})