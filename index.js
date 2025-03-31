//Primer ejercicio
console.log("Primer ejercicio");

console.log("Hola Mundo!");

//Segundo ejercicio
console.log(`
Segundo ejercicio`);

let array = ["foo", 2, true, "#6d4f3b", 3, "bar", "Hello World!", false, 3, 3, 4, 8, 27, 5, 89, 8, 3, 47];

function mostrarArrayTradicional(array)
{
    console.log(array);
}

const mostrarArrayFlecha = array => console.log(array);

mostrarArrayTradicional(array);
mostrarArrayFlecha(array);

//Tercer ejercicio
console.log(`
Tercer ejercicio`);

const agregarValorArray = elemento =>
{
    array.push(elemento);
    mostrarArrayFlecha(array);
}

agregarValorArray("hola");

//Cuarto ejercicio
console.log(`
Cuarto ejercicio`);

console.log(array.lastIndexOf("hola"));

//Quinto ejercicio
console.log(`
Quinto ejercicio`);

const sumInteger = (array) =>
{
    let nums = array.filter((a) => typeof a === "number");
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0)

    console.log(sum);
}

sumInteger(array);

//Sexto ejercicio
console.log(`
Sexto ejercicio`);

console.log(array.toReversed());

//Séptimo ejercicio
console.log(`
Séptimo ejercicio`);

const sortLowestToHighest = (array) => console.log(sorted = array.toSorted(function(a, b){return a - b}));

let nums = array.filter((a) => typeof a === "number");
sortLowestToHighest(nums);

//Octavo ejercicio
console.log(`
Octavo ejercicio`);

const filterHigherThan = (array, value) => console.log(array.filter((a) => a > value));

filterHigherThan(array, 7);

//Noveno ejercicio
console.log(`
Noveno ejercicio`);

const getAmountOfElement = (array, value) => console.log(array.filter((a) => (a === value)).length);

getAmountOfElement(array, 3);