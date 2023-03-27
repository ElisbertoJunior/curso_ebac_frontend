"use strict";

//forEach
//map

//find //retorana o elemento correpondente

var alunos = ["Zezin", "Joaozin", "Marcelin", "Joca"];
var alunos2 = alunos.map(function (aluno) {
  return {
    name: aluno,
    curso: 'Full-stack'
  };
});
console.log(alunos2);
var zezin = alunos2.find(function (aluno) {
  return aluno.name == 'Zezin';
});
console.log(zezin);
var indexDoZezin = alunos2.findIndex(function (aluno) {
  return aluno.name == 'Zezin';
});
console.log(indexDoZezin);

//Every verica a condicao para todos os item do array e 
//retorana true se a condicao for verdadeira para todos
var todosAlunosSaoDeFullStack = alunos2.every(function (aluno) {
  return aluno.curso === 'Full-stack';
});
console.log(todosAlunosSaoDeFullStack);

//some 
//Verifica de pelo menos item do array satisfar a condicao passada
var existeAlgumAlunoDeBackEnd = alunos2.some(function (aluno) {
  return aluno.curso === 'Back-end' && aluno.curso === 'Front-end';
});
console.log(existeAlgumAlunoDeBackEnd);

//filter
var alunosDeFullStack = alunos2.filter(function (aluno) {
  return aluno.curso === 'Full-stack';
});
console.log(alunosDeFullStack);

//reduce
var nums = [10, 20, 30, 40];
var soma = nums.reduce(function (acc, num) {
  acc += num;
  return acc;
}, 0);
console.log(soma);