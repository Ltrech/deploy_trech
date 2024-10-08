// Esto seria un servidor minimo que deberiamos tener con Express
// Esta escuchando y tenemos una ruta principal "/" en el proyecto

const express = require("express");
const app = express();

app.use(express.static("publica"));
// Una carpeta con acceso publico

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

    // http://localhost:3000/frutas?order=nombre&limit=5
    // http://localhost:3000/frutas?categoria=citricos
    res.sendFile(__dirname + "/frutas.json");
});




const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
