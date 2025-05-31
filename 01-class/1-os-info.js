const os = require('node:os');

console.log('Informacion del sistema operativo');

console.log('---------------------------------');

console.log('Nombre del sistema operatiov', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('Arquitectura del sistema operativo', os.arch());
console.log('CPUs', os.cpus());//<-- con esto vamos a poder escalar procesis en NodeJS
console.log('Memoria libre', os.freemem() / 1024 /  1024); // /1024 para saber los megas
console.log('Memoria total', os.totalmem() / 1024 /  1024); // /1024 para saber los megas

console.log('uptime', os.uptime() / 60 / 60 );

