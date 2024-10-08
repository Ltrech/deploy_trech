const express = require('express');
const router = express.Router();

const controller = require("../Controllers/productos.controllers");

////////////////////
// METODO GET
///////////////////

// Para todos los productos
router.get('/', controller.index);

// Para un producto
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const producto = productos.find((elemento) => elemento.id == req.params.id);
    if (!producto){
        return res.status(404).send({error : "No existe el producto"}); 
    }
    res.json(producto);
});

////////////////////
// METODO POST
///////////////////

// router.post('/', (req, res) => {
//     console.log(req.body);
//     res.send("POST");
// });

// MEJORAMOS EL POST
router.post('/', (req, res) => {
    console.log(req.body);
    const producto = {
        id : productos.length + 1,
        nombre : req.body.nombre,
        stock : req.body.stock
    };
    productos.push(producto);

    res.status(201).send(producto);
});

////////////////////
// METODO PUT - 
///////////////////
router.put('/:id', (req, res) => {
    //console.log(req.params);
    //console.log(req.body);
    const producto = productos.find((elemento) => elemento.id == req.params.id);
    if (!producto){
        return res.status(404).send({error : "No existe el producto"}); 
    }
    producto.nombre = req.body.nombre;
    producto.stock = req.body.stock;

    res.send(producto);
});

////////////////////
// METODO DELETE 
///////////////////
router.delete('/:id', (req, res) => {
    console.log(req.params);
    const producto = productos.find((elemento) => elemento.id == req.params.id);
    if (!producto){
        return res.status(404).send({error : "No existe el producto"}); 
    }

    const productoIndex = productos.findIndex((elemento) => elemento.id == req.params.id);
    // Buscamos el indice donde esta el elemento en la lista

    productos.splice(productoIndex, 1);
    // lo encontramos y con splice le decimos que desde esa posicion borre un elemento
    // ejemplo: producto 3 esta en la posicion 2, entonces elimino un elemento desde esa posicion


    res.send(producto);
    // devolvemos el producto que se elimino
});





module.exports = router;