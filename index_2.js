// Esto seria un servidor minimo que deberiamos tener con Express
// Esta escuchando y tenemos una ruta principal "/" en el proyecto

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Express !!**#&&&#**!!!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
