const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Configurar la carpeta 'public' como carpeta estática
app.use(express.static(path.join(__dirname, "public")));

// Ruta para servir el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
