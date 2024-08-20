//variables//
var numeroUno = 5;
let texto = "Hola mundo";
numeroUno = 6;
const array = ["Esto", 23, "es", 49, "una", 67, "prueba"];
let numeroDos = 3;


//Operadores//

const sumar = numeroUno + numeroDos;
console.log(sumar)

const multiplicar = numeroUno * numeroDos;
console.log(multiplicar)

const restar = numeroUno - numeroDos;
console.log(restar)

const dividir = numeroUno / numeroDos;
console.log(dividir)

const resto = numeroUno % numeroDos;
console.log(resto)

//Bucles//

const numeros = [14, 32, 73, 28, 9, 3]
let suma = 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}
console.log(suma)


let max = numeros[0]; // Inicializamos la variable max con el primer elemento del array

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
        max = numeros[i]; // Actualizamos max si encontramos un número mayor
    }
}

console.log("El número más alto es:", max);

// Definimos un  array de palabras

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "texto", "hola"];

// Procesar el array de números
for (let num of numeros) {
    if (num >= 5) {
        console.log(`${num} es mayor o igual a 5. El resultado es ${num + 1}.`);
    } else {
        console.log(`${num} es menor a 5. El resultado es ${num - 1}.`);
    }
}

// Contar cuántos elementos hay en el array de números
console.log(`El array de números tiene ${numeros.length} elementos.`);

// Contar cuántas veces se repiten las palabras
const contadorPalabras = {}; // Objeto para contar palabras
for (let palabra of palabras) {
    if (contadorPalabras[palabra]) {
        contadorPalabras[palabra]++;
    } else {
        contadorPalabras[palabra] = 1;
    }
}

// Mostrar el conteo de palabras
console.log("Repeticiones de palabras:");
for (let palabra in contadorPalabras) {
    console.log(`La palabra "${palabra}" se repite ${contadorPalabras[palabra]} veces.`);
}

