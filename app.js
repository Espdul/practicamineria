const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

//var router = express.Router();
const  fetch = require('node-fetch');

app.use(bodyParser.json());

app.get('/verificar', async (req, res) => {
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    var data = await response.json();
    return res.json(data);

});

app.get('/', async (req, res) => {
  res.send('Hello good vibes, cambio nueva rama')
});

app.listen(3000, function () {
    console.log('La Aplicación está funcionando en el puerto 3000');
});