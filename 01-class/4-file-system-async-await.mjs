import { readFile } from 'node:fs/promises';

// asincrono, usando async await
// AWAIT ASYNC SOLO CON ECMASCRIPT 
// top level await

console.log('leyendo el primer archivo...')

const text1 = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto: ', text1);


console.log('haciendo otras cosas mientras se lee el archivo...');

console.log('leyendo el segundo archivo...')

const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', text2);
