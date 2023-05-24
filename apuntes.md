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

