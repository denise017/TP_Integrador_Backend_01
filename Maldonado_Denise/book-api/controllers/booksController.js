// Importamos UUID para generar IDs unicos
const { v4: uuidv4 } = require("uuid");

// Importamos funciones del modelo de libros
const { getBooks, saveBooks } = require("../models/booksModel");

// Importamos funciones para formatear respuestas
const {
  successResponse,
  errorResponse,
} = require("../views/responseFormatter");

// Funcion para obtener la lista completa de libros
function listBooks() {
  const books = getBooks();
  return successResponse("Lista de libros", books);
}

// Funcion para agregar un nuevo libro
function addBook(parts) {
  const title = parts[1];
  const authorId = parts[2];
  const publisherId = parts[3];

  // Validamos que se ingresen todos los datos necesarios
  if (!title || !authorId || !publisherId) {
    return errorResponse(
      "Formato correcto: ADD BOOK|titulo|authorId|publisherId",
    );
  }

  const books = getBooks();

  // Creamos el nuevo libro
  const newBook = {
    id: uuidv4(),
    title,
    authorId,
    publisherId,
  };

  // Guardamos el libro en el JSON
  books.push(newBook);
  saveBooks(books);

  return successResponse("Libro agregado correctamente", newBook);
}

// Funcion para buscar un libro por ID
function getBookById(parts) {
  const id = parts[1];

  // Validamos que se ingrese un ID
  if (!id) {
    return errorResponse("Formato correcto: GET BOOK BY ID|id");
  }

  const books = getBooks();
  const book = books.find((book) => book.id === id);

  // Verificamos si el libro existe
  if (!book) {
    return errorResponse("Libro no encontrado");
  }

  return successResponse("Libro encontrado", book);
}

// Funcion para obtener libros de un autor especifico
function getBooksByAuthor(parts) {
  const authorId = parts[1];

  // Validamos que se ingrese el authorId
  if (!authorId) {
    return errorResponse("Formato correcto: GET BOOKS BY AUTHOR|authorId");
  }

  const books = getBooks();
  const filteredBooks = books.filter((book) => book.authorId === authorId);

  // Verificamos si existen libros del autor
  if (filteredBooks.length === 0) {
    return errorResponse("No se encontraron libros de ese autor");
  }

  return successResponse("Libros encontrados por autor", filteredBooks);
}

// Exportamos las funciones del controlador
module.exports = {
  listBooks,
  addBook,
  getBookById,
  getBooksByAuthor,
};
