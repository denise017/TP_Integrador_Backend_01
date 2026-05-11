// Importamos el modulo TCP de Node.js
const net = require("net");

// Importamos las funciones del controlador de libros
const {
  listBooks,
  addBook,
  getBookById,
  getBooksByAuthor,
} = require("./controllers/booksController");

// Importamos las funciones del controlador de autores
const { listAuthors, addAuthor } = require("./controllers/authorsController");

// Importamos las funciones del controlador de editoriales
const {
  listPublishers,
  addPublisher,
} = require("./controllers/publishersController");

// Importamos el formateador de respuestas
const { errorResponse } = require("./views/responseFormatter");

// Definimos el puerto del servidor
const PORT = 8080;

// Creamos el servidor TCP
const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  // Mostramos mensaje de bienvenida y comandos disponibles
  socket.write("Bienvenida a la API de Biblioteca\n");
  socket.write(
    "Comandos disponibles: GET BOOKS, ADD BOOK, GET BOOK BY ID, GET BOOKS BY AUTHOR, GET AUTHORS, ADD AUTHOR, GET PUBLISHERS, ADD PUBLISHER\n",
  );

  // Escuchamos los datos enviados por el cliente
  socket.on("data", (data) => {
    try {
      const command = data.toString().trim();
      const parts = command.split("|");
      const action = parts[0].toUpperCase();

      console.log("Comando recibido:", command);

      let response;

      // Procesamos los comandos enviados por el cliente
      if (action === "GET BOOKS") {
        response = listBooks();
      } else if (action === "ADD BOOK") {
        response = addBook(parts);
      } else if (action === "GET BOOK BY ID") {
        response = getBookById(parts);
      } else if (action === "GET BOOKS BY AUTHOR") {
        response = getBooksByAuthor(parts);
      } else if (action === "GET AUTHORS") {
        response = listAuthors();
      } else if (action === "ADD AUTHOR") {
        response = addAuthor(parts);
      } else if (action === "GET PUBLISHERS") {
        response = listPublishers();
      } else if (action === "ADD PUBLISHER") {
        response = addPublisher(parts);
      } else {
        response = errorResponse("Comando no reconocido");
      }

      // Enviamos la respuesta al cliente
      socket.write(response + "\n");

      // Manejo de errores del servidor
    } catch (error) {
      socket.write(errorResponse("Ocurrio un error en el servidor") + "\n");
    }
  });

  // Detectamos cuando el cliente se desconecta
  socket.on("end", () => {
    console.log("Cliente desconectado");
  });

  // Manejo de errores del cliente
  socket.on("error", (error) => {
    console.log("Error con el cliente:", error.message);
  });
});

// Manejo de errores generales del servidor
server.on("error", (error) => {
  console.log("Error en el servidor:", error.message);
});

// Iniciamos el servidor TCP
server.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});
