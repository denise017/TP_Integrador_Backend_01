// Importamos los modulos necesarios para manejar archivos y rutas
const fs = require("fs");
const path = require("path");

// Definimos la ruta del archivo JSON de libros
const booksPath = path.join(__dirname, "../data/books.json");

// Funcion para obtener los libros desde el JSON
function getBooks() {
  const data = fs.readFileSync(booksPath, "utf-8");
  return JSON.parse(data);
}

// Funcion para guardar libros en el JSON
function saveBooks(books) {
  fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
}

// Exportamos las funciones del modelo
module.exports = {
  getBooks,
  saveBooks,
};
