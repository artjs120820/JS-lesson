let x = 5
let y = '5'
let q = '8'


//CASO BOOLEANO
//CONJUNCIÓM: &&
//DISYUNCIÓN: ||
//NEGACIÓN: !
let z = x == y;   //DOS IGUALES: comparan solo el valor absoluto
let w = x === y;  //TRES IGUALES: comparan el valor absoluto y el tipo de dato
let m = x != y;   //Negación
let s = x !== y;
let j = x >= y && x > q;
let h = x >= y || x > q;
console.log(z)
console.log(w)
console.log(m)
console.log(s)
console.log(j)
console.log(!h) //negación de true = false


//PRUEBA NODE.JS
//digitar en la consola de la carpeta "logicsOperators": node script.js