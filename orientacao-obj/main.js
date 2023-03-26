const carro = {
  modelo: 'Civic',
  fabricante: 'Honda',
  anoFabicacao: 2016,
  anoModelo: 2016,

  acelerar: function() {
    console.log('vruum');
  }

}

//Funcao construtora

function Carro(modelo, fabricante, anoFabicacao, anoModelo) {
  this.modelo = modelo;
  this.fabricante = fabricante,
  this.anoFabicacao = anoFabicacao,
  this.anoModelo = anoModelo

  this.acelerar = () =>  {
    console.log('vruum');
  }
}

const carro2 = new Carro('Hb20', 'Hyunday', 2021, 2022);

console.log(carro2.acelerar());
console.log(carro2 instanceof Carro);

//Utilizando colchetes em vez de .
const exibeAtributo = (obj, nomeAtributo) => {
  return obj[nomeAtributo]
}

exibeAtributo(carro2, 'modelo');
/*---------------------------------------------*/

///Exemplo 2 Pessoa 

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}

const jose = new Pessoa('Jose', 'Alves', 25)

//atribuindo novo atributo
jose['endereco'] = 'Rua 32-A'

//verificacao de atributo
// if(jose['endereco']) {
//   console.log('Esta pessoa possui endereco')
// }
//Verificacao com in
if('endereco' in jose) {
  console.log('Esta pessoa possui endereco')
}
 
console.log(`Enderoco do jose ${exibeAtributo(jose, 'endereco')}`)

Object.freeze(jose) // inpede que as tributos sejam reatribuidos
Object.keys(jose) // retorna os atributos em forma de array
Object.values(jose) // retorna os valores em forma de array