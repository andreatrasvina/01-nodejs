const fs = require('node:fs/promises');

// asincrono, usando promesas

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8').then(text => {
    console.log('primer texto: ', text);
});


console.log('haciendo otras cosas mientras se lee el archivo...');

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8').then(text => {
    console.log('segundo texto: ', text);
});


//se puede forzar de pasar de callback a promesas con
const { promisify } = require('node:util');

const readFilePromise = promisify(fs.readFile);

//pero solo en los modulos nativos que no aceptan promesas
