# ECMASCRIPT Y SU HISTORIA

> **TC39** es un grupo de desarrolladores, académicos y hackers encargados de revisar cada nueva propuesta o funcionalidad que cumpla con el estándar. El estándar es una serie de pasos que sigue una nueva propuesta para ser publicada en alguna versión futura de ECMAScript.

Etapas de una nueva propuesta para ECMAScript
Las etapas de una nueva propuesta para ECMAScript son:

1. Idea: Surge como una inquietud del desarrollador.
2. Propuesta: Se explica como y por qué la idea resuelve un problema.
3. Borrador: Se detalla exhaustivamente la nueva funcionalidad.
4. Candidato: La funcionalidad es probada y desarrollada por el comité.
5.  Preparada: La funcionalidad está lista para ser publicada.


# Let y Const

Las nuevas formas de declarar variables con let y const se agregaron a partir de la especificación de ES6. Estas palabras reservadas solucionan varios problemas asociados a var, como el ámbito (scope), hoisting, variables globales, re-declaración y re-asignación de variables.

### Variables re-declaradas y re-asignadas

La re-declaración es volver a declarar una variable, y la re-asignación es volver a asignar un valor. Entonces cada palabra reservada tiene una forma diferente de manejar variables:

- Una variable declarada con **var** puede ser re-declarada y re-asignada.
- Una variable declarada con **let** puede ser re-asignada, pero no re-declarada.
- Una variable declarada con **const** no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

> En conclusión, si intentas re-declarar una variable declarada con let y const habrá un error de “variable ya declarada”; por otro lado, si intentas re-asignar una variable declarada con const existirá un “error de tipo”.

En los demás casos, JavaScript los aceptará como válidos, lo cual 
puede ser problemático con var, por eso se recomienda dejar de utilizarlo.

Aquí tienes un ejemplo de declaración y asignación en diferentes líneas:

```JS 
// Declaración de variables
var nameVar 
let nameLet

// Asignación de variables
nameVar= "soy var"
nameLet = "soy let"
```

> Es importante tener en cuenta que si no asignas un valor en la declaración, JavaScript asignará automáticamente el valor undefined.

A continuación, se muestra un ejemplo de declaración y asignación con const en diferentes líneas de código:

```js
const pi  // SyntaxError: Missing initializer in const declaration.
pi = 3.14

//Ejemplo de re-declaración de variables:

var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.

const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.

//Ejemplo de re-asignación de variables:
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.
```
También es importante tener en cuenta que los errores detendrán la ejecución del programa.

## Scope
>En lo que respecta al ámbito (scope), *let* y *const* tienen un ámbito de bloque, mientras que *var* no lo tiene.

```JS
{
var nameVar = "soy var"
let nameLet = "soy let"
}

console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined
```


Objeto global

> En cuanto a las variables globales, let y const no guardan sus variables en el objeto global (window, global o globalThis), mientras que **var sí lo hace**.

```JS
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined
```
Esto es importante para evitar la re-declaración de variables.

# Arrow Functions

Las funciones flecha (arrow functions) son funciones anónimas que siguen la siguiente estructura:

```js
//Función tradicional
function nombre (parámetros) {
    return valorRetornado
}

//Función flecha
const nombre = (parámetros) => {
    return valorRetornado
}
```

> Se les llama arrow function por el elemento => en su sintaxis

### Omitir parentesis en las funciones flecha.
> Si solo tienes un parámetro, puedes omitir los paréntesis en la declaración de la función flecha.

```js 
const porDos = num => {
    return num * 2
}
```

### Retorno implícito

Las funciones flecha tienen un retorno implícito, lo que significa que se puede omitir la palabra reservada return y escribir el código en una sola línea.

Aquí tienes un ejemplo que muestra la diferencia entre una función tradicional y una función flecha con retorno implícito:

```js
//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2
```

Si el retorno requiere de más líneas y aún deseas utilizarlo de manera explicita, debes envolver el cuerpo de la función entre paréntesis.

```js
const suma = (num1, num2) => (
    num1 + num2
)
```

# Plantillas literales y Strings

Las *template literals* son una forma de crear cadenas de caracteres que pueden contener variables sin necesidad de utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código.

### Concatenación de cadenas de caracteres:

Antes de ES6, si deseabas crear una cadena larga o un mensaje elaborado, tenías que utilizar la concatenación de cadenas. 

> *La concatenación de cadenas consiste en unir uno o más caracteres, como si fuera una suma*.

```js
var nombre = "Andres";
var edad = 23;
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";

console.log(mensaje);
// 'Mi nombre es Andres y tengo 23 años.'var nombre = "Andres";
var edad = 23;
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";

console.log(mensaje);
// 'Mi nombre es Andres y tengo 23 años.'
```

Esto genera varios problemas en la legibilidad y la mantenibilidad del código. Se vuelve más complejo en mensajes más extensos o al tener que preocuparse por agregar espacios antes o después de cada variable concatenada.

### Uso de *template literals*.

Con la introducción de las plantillas literales en ES6, se utiliza el carácter de acento grave ( ` ), que no debe confundirse con la comilla simple ( ' ), para envolver el mensaje. Para incluir las variables, se utiliza la sintaxis ${variable}.

```js
var nombre = "Andres";
var edad = 23;

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`;

console.log(mensaje);
// 'Mi nombre es Andres y tengo 23 años.'
```
De esta manera, el código es más legible y fácil de mantener.

*template literals* con múltiples líneas:
Las plantillas literales también permiten crear mensajes que contengan varias líneas separadas entre sí. Antes de ES6, la forma de crear una plantilla con múltiples líneas era agregar el carácter de escape **\n** al string.

```js
var mensaje = "Línea 1 \n" + "línea 2";

console.log(mensaje);
// 'Línea 1
// línea 2'

//Con ES6, solo necesitas utilizar las plantillas literales sin necesidad de caracteres de escape.

const mensaje = `Línea 1
línea 2`;

console.log(mensaje);
// 'Línea 1
// línea 2'

```

# Parametros por defecto 

Consisten en establecer un valor por defecto a los parámetros de una función, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.

>Cómo era utilizar valores por defecto antes de ES6?

Tal como puedes ver en el siguiente código, la función sumar recibe dos parámetros y retorna el valor total. Sin embargo, si alguien no decide poner alguno o todos los parámetros necesarios, pues que el programa no funcionará correctamente.

```js
function sumar(number1, number2){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // NaN  
sumar()    // NaN
```
Antes de ES6, se debía establecer una variable y utilizar el operador OR ( ||) con el valor por defecto necesario. El caracter guion bajo ( _) lo utilizo para diferenciar el parámetro de la función de la variable declarada.

```js
function sumar(number1, number2){
  var _number1 = number1 || 0
  var _number2 = number2 || 0
  
  return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
```
> Cómo utilizar los parámetros por defecto?

Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:
```js
function sumar(number1 = 0, number2 = 0){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
```
Puedes utilizar cualquier valor, siempre que sea necesario.

> Posición de los parámetros por defecto

Si obligatoriamente necesitas el valor como argumento, ten presente que los parámetros por defecto siempre deben estar en las posiciones finales.

```js
// ❌ Mal
function sumar(number1 = 0, number2) { ... }
sumar(3)   // number1 = 3 y number2 = undefined 

// ✅ Bien
function sumar(number1, number2 = 0) { ... }
sumar(3)   // number1 = 3 y number2 = 0
```