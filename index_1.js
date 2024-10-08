// Servidor esta escuchando pero no responde
// Express coloca en el Status 404 de forma automatica

const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// http://localhost:3000/