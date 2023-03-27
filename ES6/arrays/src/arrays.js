
//forEach
//map

//find //retorana o elemento correpondente

const alunos = ["Zezin", "Joaozin", "Marcelin", "Joca"];

const alunos2 = alunos.map(aluno => ({ name: aluno, curso: 'Full-stack'}));

console.log(alunos2);

const zezin = alunos2.find(aluno => aluno.name == 'Zezin');
console.log(zezin);

const indexDoZezin = alunos2.findIndex(aluno => aluno.name == 'Zezin');
console.log(indexDoZezin);

//Every verica a condicao para todos os item do array e 
//retorana true se a condicao for verdadeira para todos
const todosAlunosSaoDeFullStack = alunos2.every(aluno => aluno.curso === 'Full-stack');
console.log(todosAlunosSaoDeFullStack);

//some 
//Verifica de pelo menos item do array satisfar a condicao passada
const existeAlgumAlunoDeBackEnd = alunos2
  .some(aluno => aluno.curso === 'Back-end' && aluno.curso === 'Front-end')
console.log(existeAlgumAlunoDeBackEnd);

//filter
const alunosDeFullStack = alunos2.filter(aluno => aluno.curso === 'Full-stack');
console.log(alunosDeFullStack);

//reduce
const nums = [10, 20, 30, 40];

const soma = nums.reduce((acc, num) => {
  acc += num
  return acc
}, 0)

console.log(soma);