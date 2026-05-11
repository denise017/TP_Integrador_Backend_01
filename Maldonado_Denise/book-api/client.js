// Importamos el modulo TCP y readline
const net = require("net");
const readline = require("readline");

// Creamos la conexion del cliente al servidor
const client = net.createConnection({ port: 8080 }, () => {
  console.log("Conectado al servidor");
  console.log("Escribi un comando y apreta Enter.");

  // Mostramos ejemplos de comandos disponibles
  console.log("Ejemplos:");
  console.log("GET BOOKS");
  console.log("GET AUTHORS");
  console.log("GET PUBLISHERS");
  console.log("ADD AUTHOR");
  console.log("ADD PUBLISHER");
  console.log("ADD BOOK");
});

// Configuramos readline para leer comandos desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enviamos el comando escrito al servidor
rl.on("line", (input) => {
  client.write(input);
});

// Mostramos la respuesta recibida del servidor
client.on("data", (data) => {
  console.log("Respuesta del servidor:");
  console.log(data.toString());
});

// Detectamos cuando el servidor se desconecta
client.on("end", () => {
  console.log("Desconectado del servidor");
  rl.close();
});

// Manejo de errores del cliente
client.on("error", (error) => {
  console.log("Error:", error.message);
});
