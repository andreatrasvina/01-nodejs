// .js --> por defecto utiliza commonJS
// .mjs --> para utilizar ES Modules
// .cjs --> forzar utilizar CommonJS

import {div, mult, sum} from './sum.mjs';

console.log(sum(1,2));
console.log(mult(1,2));
console.log(div(1,2));
