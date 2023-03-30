
/*
  Exercicio

  Utilizando o TypeScript e a tipagem escreva
  duas funções: uma função de multiplicação que
  deverá receber como argumentos dois números
  e retornar a multiplicação deles, e uma função de
  saudação que deverá receber um nome e retornar
  a concatenação “Olá “ + nome;

*/
const multiply = (numA: number, numB: number): number => numA * numB;

const salutation = (name: string): string => `Olá ${name}`

console.log(salutation('Junior'));
console.log('Resultado da multiplicacao: ' + multiply(5, 5));