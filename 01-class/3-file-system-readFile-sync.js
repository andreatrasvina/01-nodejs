
const fs = require('node:fs');

console.log('leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log('primer texto: ',text);

console.log('haciendo otras cosas mientras se lee el archivo...');

console.log('leyendo el segundo archivo...');
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(text2);
