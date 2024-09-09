const express = require('express');
require('dotenv').config();
const cors = require("cors");
// Crear servidor express
const app = express();

app.use(cors());
// Directorio publico
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api', require('./src/routes/news.routes'))


// Escuchar peticiones
app.listen(process.env.PORT, ()=>{
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})