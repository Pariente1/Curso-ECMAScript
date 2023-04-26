// De esta forma se hacia antes de ES6

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Template literals

let epicPhrase2 = `${hello} ${world} 2`; // a estas comillas(``) se les llama comillas francesas.
console.log(epicPhrase2);

// Multi-line strings, asi se hacia antes.

let lorem = 'Esto es un string \n ' + 'esto es otra linea';

// asi se hace ahora a partir de ES6.

let lorem2 = `Esta es una frase epica
esto es la continuacion de esa frase`;
console.log(lorem2);
