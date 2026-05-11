**TP Integrador Backend**

Este proyecto consiste en una API de biblioteca desarrollada con Node.js utilizando el patron MVC, persistencia de datos con archivos JSON y comunicacion mediante servidor TCP.
La aplicacion permite gestionar libros, autores y editoriales desde la terminal utilizando distintos comandos enviados desde un cliente TCP.
Integre varios temas como manejo de archivos con FS, uso de UUID, organizacion MVC y comunicacion cliente-servidor mediante NET.

**Funcionalidades**

**La API permite:**
Obtener libros
Agregar libros
Buscar libros por ID
Buscar libros por autor
Obtener autores
Agregar autores
Obtener editoriales
Agregar editoriales
Toda la informacion se guarda automaticamente en archivos JSON dentro de la carpeta data.

**Como ejecutar la aplicacion**
1. Iniciar el servidor
npm start

El servidor se ejecuta en el puerto 8080.

2. Iniciar el cliente

Abrir otra terminal y ejecutar:

node client.js

3. Luego se pueden escribir comandos desde la terminal para interactuar con la API.

**Comandos disponibles**
GET BOOKS
GET AUTHORS
GET PUBLISHERS
GET BOOK BY ID|1
GET BOOKS BY AUTHOR|1
ADD AUTHOR|nombre|nacionalidad
ADD PUBLISHER|nombre|pais
ADD BOOK|titulo|authorId|publisherId
Manejo de errores
