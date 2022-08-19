/////////////////////// Exercício 3 ////////////////////////////

// Crie um array com 5 strings. Faça um programa que percorra este array e
//imprima as strings em formato de ranking, como no exemplo abaixo:


// **Utilize o for...of para resolver**
// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```


// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// let string;


// for (let i = 0; i < maioresPaises.length; i++) {
//     string = `${i + 1}º ${maioresPaises[i]}`;
//     console.log(string);
// }

// for (let j of maioresPaises) {
//     console.log(`${j} `);
// }
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

let string;

let i = 0

for (const j of maioresPaises) {
    /*i = i + 1 ou i += 1; ou */
    i++;
    console.log(`${i}º - ${j}`);
}