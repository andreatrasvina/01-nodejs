const path = require('node:path');

//barra separadora de carpetas segun SO
console.log(path.sep);

//unir rutas con path join, sirve para uso de diferentes SO
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//obtener fichero de una ruta
const base = path.basename('roblox/secret/password.txt');
console.log(base);

//sin extension
const filename = path.basename('roblox/secret/password.txt', '.txt');
console.log(filename);

//extension
const extension = path.extname('image.jpg');
console.log(extension);

