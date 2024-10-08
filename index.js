// Esto seria un servidor minimo que deberiamos tener con Express
// Esta escuchando y tenemos una ruta principal "/" en el proyecto

const express = require("express");
const app = express();

app.use(express.static("publica"));
// Una carpeta con acceso publico

app.use(express.json());
// en el cuerpo de la peticion viene un json, lo voy a transformar en un objeto JS y de esta manera
// lo voy a poder utilizar

const productosRouter = require('./routers/productos.router');
// app.use(productosRouter);

// Le estamos diciendo que use productosRouter
// Escrito de esta manera me esta pisando la raiz de pagina principal
// Necesitamos poner un prefijo al modulo que vamos a usar


app.use('/productos',productosRouter);
// Siempre que me refiera a un producto le voy a colocar el prefijo en el navegador


app.get("/", (req, res) => {
    res.send("Hola Express !!**#&&&#**!!!");
});

// Esta es la ruta principal del proyecto "/"

app.get("/nosotros", (req, res) => {
    // login
    res.sendFile(__dirname + "/privada/nosotros.html");
});

// La ruta "nosotros" es la ruta a la carpeta privada que contiene el
// archivo nosotros.html


app.get("/frutas", (req, res) => {
   
    // console.log(req.query); // Aca van todas las consultas para los query

    // http://localhost:3000/frutas?categoria=citricos&importe=200
    // http://localhost:3000/frutas?order=nombre&limit=5
  
    res.sendFile(__dirname + "/frutas.json");
});

const usuarios = [
    { id: 1, name: "Usuario 1"},
    { id: 2, name: "Usuario 2"},
    { id: 3, name: "Usuario 3"},
    { id: 4, name: "Usuario 4"},
    { id: 5, name: "Usuario 5"},
    { id: 6, name: "Usuario 6"}
];

app.get("/usuarios/:id", (req,res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    //res.send("OK");
    const usuario = usuarios.find((usuario) => usuario.id == req.params.id);
    console.log(usuario);
    res.send(usuario);
}); 

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));