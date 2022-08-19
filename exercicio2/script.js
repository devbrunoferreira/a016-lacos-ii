/////////////////////// Exercício 2 ////////////////////////////

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```
console.log("- Exercício 2");
console.log('');

let numero = +prompt("Digite um número (0 - 10):");

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("");


let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in tabuada) {
    console.log(`${tabuada[i]} x ${numero} = ${tabuada[i] * numero} `);
}

// let tabuada = []

// for (let i in tabuada) {
//     tabuada.push(i + 1);
//     console.log(tabuada);
// }

