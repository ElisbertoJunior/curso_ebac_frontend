type aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
}

const alunos: aluno[] = [
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


const novoAluno: aluno = {
  nome: 'Jose',
  idade: 30,
}

function exibeAluno(aluno: aluno): void {
  console.log(aluno.nome);
}

exibeAluno(novoAluno);
