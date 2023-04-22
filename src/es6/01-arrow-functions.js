function square(num){ //Esta es la forma normal
    return num * num;
} 

//Se recomienda al usar arrowFunctions usar const para crear funciones de esa manera.

const square = (num) => {
    return num * num;
}

const square = num => num * num; //Esto es exactamente igual que el principio. Para mas información esta este enlace.

// https://www.notion.so/ECMAScript-630a7cc50297483a93f1141e844cf7e8?pvs=4