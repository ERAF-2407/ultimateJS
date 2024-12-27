/**
 * Crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */
let array = [{
    id: 1,
    name: 'Efrén',
}, {
    id: 2,
    name: 'Rafael',
}, {
    id: 3,
    name: 'Arnaude',
}];

let pares = [
    [1, { id: 1, name: "Efrén"}],
    [2, { id: 2, name: "Rafael"}],
    [3, { id: 3, name: "Arnaude"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
