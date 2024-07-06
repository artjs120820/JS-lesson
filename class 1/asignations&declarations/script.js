//VARIABLE: contenedor donde se puede guardar valores
//Existen 3 formas de declarar variables en Javascript
//1
var nombreDeLaVariable1 = 'Pedro'
//2 *Se suele utilizar para reasignar*
let nombreDeLaVariable2 = 'Pedro'
//3 *MÁS UTILIZADO, por el simple hecho de que no se puede reasignar Y redeclarar la variable*
const nombreDeLaVariable3 = 'Pedro'


//Declarar varias variables a mismo tiempo
let x, y, z;
x = 5; y = 7; z = x + y;
//x=y; esto no es recomendable, ya que aquí, X apunta a la dirección de memoria de Y
//JS no interpreta los espacios, además, tampoco interpreta los enters:
const datoQueVieneDeLaBaseDeDatosDelCliente = 
    'Pedro';



//LLAVES, encierran las variables
function nombreDeFuncion(){
    const nombreDeVariable = 'Variable de la función'
}