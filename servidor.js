const express = require('express');
const Contenedor = require('./index.js')
const PORT = 8080;
const app = express();
const fs = require('fs');

const productos = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));

let productosContenedor = new Contenedor();

for (const prod of productos) {
    productosContenedor.save(prod)
}

const server = app.listen(PORT, () => {
    console.log('Hola mundo');
})

app.get('/', (req, res) => {
    res.send( {mensaje: 'hola desde el inicio'} )
})

app.get('/productos', (req, res) => {
    res.send(productosContenedor.getAll())
})

app.get('/productoRandom', (req, res) => {
    res.send( {mensaje: 'productoRandom'} )
})
