// SCOPE

let x = 2
{
    let x = 3
    console.log("Dentro de las llaves",x)
}
console.log("Fuera de las llaves",x)


let y = 999999
{
    console.log("Dentro de las llaves",y)
}
console.log("Fuera de las llaves",y)

let z = 1
{
    let w = 2
    z += w
    console.log("Con acumulador",z)
}

