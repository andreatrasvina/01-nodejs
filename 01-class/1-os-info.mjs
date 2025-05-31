import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Informacion del sistema operativo');

console.log('---------------------------------');

console.log('Nombre del sistema operatiov', platform());
console.log('Version del sistema operativo', release());
console.log('Arquitectura del sistema operativo', arch());
console.log('CPUs', cpus());//<-- con esto vamos a poder escalar procesis en NodeJS
console.log('Memoria libre', freemem() / 1024 /  1024); // /1024 para saber los megas
console.log('Memoria total', totalmem() / 1024 /  1024); // /1024 para saber los megas

console.log('uptime', uptime() / 60 / 60 );

