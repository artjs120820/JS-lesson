// NUMBER
let a = 5 // Valor entero
let b = 5.5 //Valor Flotante

//STRING
let c = 'Cadena de texto' //VALOR STRING(texto)

//BOOLEANO
let d = true  //VERDADERO
let e = false //FALSO

//UNDEFINED
let f //No se asignó valor por lo cual es indefinido

//NULL
let g = null;


let valor = "Hola Mundo!"
//OBJECT
let objeto =   {    //VALOR OBJETO
    clave: valor
}

//ARRAY
let array = [1,2,3,4,5]              //ARREGLO O LISTA DE NÚMEROS
let array2 = ['HTML', 'CSS', 'JS']   //ARREGLO O LISTA DE PALABRAS

//DATE
const date = new Date("05-14-2023")
console.log(date)


//CASO PARTICULAR
let num1 = 2           //NÚMERO ENTERO
let num2 = '2'         //STRING DE NÚMERO ENTERO
let num2_1 = '2.98'    //STRING DE NÚMERO FLOTANTE
let num3 = num1 + num2 
console.log(num3)
//EL '+' TAMBIÉN SE ENTIENDO COMO UNA CONCATENACIÓN DE PALABRAS
//Solución
let num4 = num1 + parseInt(num2)
let num5 = num1 + parseFloat(num2_1)
console.log(num4)
console.log(num2_1)