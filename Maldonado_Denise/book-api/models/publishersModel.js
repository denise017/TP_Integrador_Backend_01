// Importamos los modulos necesarios para manejar archivos y rutas
const fs = require("fs");
const path = require("path");

// Definimos la ruta del archivo JSON de editoriales
const publishersPath = path.join(__dirname, "../data/publishers.json");

// Funcion para obtener las editoriales desde el JSON
function getPublishers() {
  const data = fs.readFileSync(publishersPath, "utf-8");
  return JSON.parse(data);
}

// Funcion para guardar editoriales en el JSON
function savePublishers(publishers) {
  fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2));
}

// Exportamos las funciones del modelo
module.exports = {
  getPublishers,
  savePublishers,
};
