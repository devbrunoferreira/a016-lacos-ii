/////////////////////// Exercício 1 ////////////////////////////

// Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, 
//e quer que você construa um código que mostre isso.
//
// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array 
//que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:
//
// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47
// ```

console.log(" - Exercício 1");
console.log('');

// const array = [
//     [27, 4, 20, 13, 14],
//     [11, 15, 12, 8, 9],
//     [5, 5, 12, 16, 4],
//     [20, 33, 11, 12, 19],
//     [3, 3, 4, 5, 10]
// ]

// let string = 0, i = 0, j = 0;

// for (let jogador = 0; jogador < array.length; jogador++) {
//     string = `Jogador ${jogador + 1}: `;
//     for (let temporada = 0; temporada < array[jogador].length; temporada++) {
//         string += ` ${`Temporada: ${array[jogador][temporada]}
//     `} `;
//     }
//     console.log(string);
// }

// let temporada = 0;

// for (let i = 0; i < array.length; i++) {
//     temporada++;
//     console.log(`Temporada ${temporada}: ${array[i]}`);
// }

// for (i = 0; i < array.length; i++) { //////// REPETINDO 5 VEZES
//     string = `Jogador ${i + 1}:`
//     for (j = 0; j < array[i].length; j++) {
//         string += ` ${array[i]}`
//     }
//     console.log(string);
// }
const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

let string = 0, i = 0, j = 0;

for (i = 0; i < array.length; i++) {  /////// PROBLEMA DE REPETIR 5 VEZES RESOLVIDO
    string = `Jogador ${i + 1}:`
    for (j = 0; j < array[i].length; j++) {
        string += ` ${array[i][j]}`
    }
    console.log(string);
}

console.log("");

for (i in array) {
    string = `Jogador ${+i + 1}:`

    for (j of array[i]) {
        string += ` ${j}`
    }
    console.log(string);
}

