var lastName = 'David';
lastName = 'Oscar'; //Estamos reasignando el valor original anterior de "david".
console.log(lastName);

let fruit = 'apple';
fruit = 'kiwi'; // Al igual que en el ejemplo anterior estamos reasignando, tanto var como let tienen esta funcion.
console.log(fruit);

const animal = 'dog';
animal = 'cat'; //Aqui estamos intentando reasignar una variable pero como lo hicimos con "const" nos lo va a impedir. 
console.log(animal) //TypeError: Assignment to constant variable. 

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function sope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
} 

fruits();