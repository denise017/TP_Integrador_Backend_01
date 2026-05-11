// Importamos los modulos necesarios para manejar archivos y rutas
const fs = require("fs");
const path = require("path");

// Definimos la ruta del archivo JSON de autores
const authorsPath = path.join(__dirname, "../data/authors.json");

// Funcion para obtener los autores desde el JSON
function getAuthors() {
  const data = fs.readFileSync(authorsPath, "utf-8");
  return JSON.parse(data);
}

// Funcion para guardar autores en el JSON
function saveAuthors(authors) {
  fs.writeFileSync(authorsPath, JSON.stringify(authors, null, 2));
}

// Exportamos las funciones del modelo
module.exports = {
  getAuthors,
  saveAuthors,
};
