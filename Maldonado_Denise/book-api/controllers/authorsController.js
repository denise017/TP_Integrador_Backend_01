// Importamos UUID para generar IDs unicos
const { v4: uuidv4 } = require("uuid");

// Importamos funciones del modelo de autores
const { getAuthors, saveAuthors } = require("../models/authorsModel");

// Importamos funciones para formatear respuestas
const {
  successResponse,
  errorResponse,
} = require("../views/responseFormatter");

// Funcion para obtener la lista de autores
function listAuthors() {
  const authors = getAuthors();
  return successResponse("Lista de autores", authors);
}

// Funcion para agregar un nuevo autor
function addAuthor(parts) {
  const name = parts[1];
  const nationality = parts[2];

  // Validamos que se ingresen todos los datos necesarios
  if (!name || !nationality) {
    return errorResponse("Formato correcto: ADD AUTHOR|nombre|nacionalidad");
  }

  const authors = getAuthors();

  // Creamos el nuevo autor
  const newAuthor = {
    id: uuidv4(),
    name,
    nationality,
  };

  // Guardamos el autor en el JSON
  authors.push(newAuthor);
  saveAuthors(authors);

  return successResponse("Autor agregado correctamente", newAuthor);
}

// Exportamos las funciones del controlador
module.exports = {
  listAuthors,
  addAuthor,
};
