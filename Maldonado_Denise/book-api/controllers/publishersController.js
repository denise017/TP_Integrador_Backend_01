// Importamos UUID para generar IDs unicos
const { v4: uuidv4 } = require("uuid");
// Importamos funciones del modelo de editoriales
const { getPublishers, savePublishers } = require("../models/publishersModel");

// Importamos funciones para formatear respuestas
const {
  successResponse,
  errorResponse,
} = require("../views/responseFormatter");

// Funcion para obtener la lista de editoriales
function listPublishers() {
  const publishers = getPublishers();
  return successResponse("Lista de editoriales", publishers);
}

// Funcion para agregar una nueva editorial
function addPublisher(parts) {
  const name = parts[1];
  const country = parts[2];

  // Validamos que se ingresen todos los datos necesarios
  if (!name || !country) {
    return errorResponse("Formato correcto: ADD PUBLISHER|nombre|pais");
  }

  const publishers = getPublishers();

  // Creamos la nueva editorial
  const newPublisher = {
    id: uuidv4(),
    name,
    country,
  };

  // Guardamos la editorial en el JSON
  publishers.push(newPublisher);
  savePublishers(publishers);

  return successResponse("Editorial agregada correctamente", newPublisher);
}

// Exportamos las funciones del controlador
module.exports = {
  listPublishers,
  addPublisher,
};
