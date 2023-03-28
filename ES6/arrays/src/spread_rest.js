//O rest e a mesma coisa do spread so que usado no argumento da funcao

///Exemplo
//o ...numeros e trasformado em um array com todos argumantos passados
const soma = (...numeros) => {
  numeros.reduce((total, numAtual) => {
    total += numAtual
    return total
  }, 0)
}

console.log(soma(1, 5, 10))

//Spread

const timeDeSP = ['Corinthians','Santos', 'Palmeiras', 'Sao Paulo'];
const timesDoRio = ['Flamengo', 'Fluminense', 'Vasco', 'Botafogo'];
 
const timesSPeRio = [...timeDeSP, ...timesDoRio];

console.log(timesSPeRio)

//desestruturacao com alias(apelido)

const { modelo: modeloJoao } = carroDoJoao;

//desestruturacao de arrays

const [item1, item2] = timesSPeRio;