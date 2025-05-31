//secuencial y sincronooo no sirveee porque soy un monohilo
const fs = require('node:fs');

console.log('leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);

console.log('haciendo otras cosas mientras se lee el archivo...');

console.log('leyendo el segundo archivo')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(text2);

// asincrono, usando callbacks

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer archivo:', text);
});


console.log('haciendo otras cosas mientras se lee el archivo...');

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo archivo:',text);

});
