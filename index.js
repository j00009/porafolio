const express = require('express');
const app = express();

// Configuración de archivos estáticos

app.use(express.static('assets'));
app.use(express.static('static'))

// Ruta para el index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Servidor escuchando en el puerto 3000
app.listen(3000, () => console.log('App corriendo en p 3000'));
