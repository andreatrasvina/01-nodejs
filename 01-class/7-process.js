//obj global process proporciona info y control de los procesos aactuales

//recupera argumentos de entrada
console.log(process.argv);

//controlar el proceso y su salida
process.exit(1);

//controlar eventos del procesos
process.on('exit', () => {
    //limpiar los recursos;
});

//current working directory, directorio donde se esta realizando el proceso
console.log(process.cwd());

//platform
console.log(process.env.PEPE);
