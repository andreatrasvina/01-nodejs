const fs = require('node:fs'); // a partir de Node 16 para los modulos nativos se recomienda usar " NODE : X "

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si e sun directorio
    stats.isSymbolicLink(), //si e sun enlace simbolico
    stats.size, // tamano en bytes
)