"use strict";
function area(base, altura) {
    return base * altura;
}
const area2 = (base, altura) => base * altura;
function soma(...numeros) {
    return numeros.reduce((acc, number) => {
        acc += number;
        return acc;
    }, 0);
}
console.log(soma(1, 3, 4, 7));
console.log(area2(1, 3));
