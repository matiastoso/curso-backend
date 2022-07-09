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

const arrayDeProductos = productosContenedor.getAll();

const server = app.listen(PORT, () => {
    console.log('Hola mundo');
})

app.get('/', (req, res) => {
    res.send( `<h1>Hola desde el inicio</h1>` )
})

app.get('/productos', (req, res) => {
    let html = `<h1> Listado de productos </h1>`;
    for (const prod of arrayDeProductos) {
        html += `<div>
                    <img width="150px" height="150px" src="${prod.thumbnail}">
                    <h3> ${prod.title} $${prod.price} </h3>
                </div>`
    }
    res.send(html);
})

app.get('/productoRandom', (req, res) => {
    let numeroAzar = Math.trunc(Math.random() * 4);
    let productoElegido = productosContenedor.getById(numeroAzar);
    res.send( `<div>
                    <img width="150px" height="150px" src="${productoElegido[0].thumbnail}">
                    <h3> ${productoElegido[0].title} $${productoElegido[0].price} </h3>
                </div>` );
})
