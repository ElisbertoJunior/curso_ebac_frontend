"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'Back-end'],
        idade: 26,
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'Java'],
        idade: 23,
    },
];
const novoAluno = {
    nome: 'Jose',
    idade: 30,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
exibeAluno(novoAluno);
