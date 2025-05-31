import { readFile } from 'node:fs/promises';

// asincrono, usando async await
// AWAIT ASYNC SOLO CON ECMASCRIPT 
// aqui realizamos las tareas en palaleo
// paralelizamos la asincronia y procede al resultado hasta que las tareas se han completado

Promise.all([
    //tareas
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
    //resultado
    console.log('primer texto: ', text)
    console.log('segundo texto: ', text2)
});