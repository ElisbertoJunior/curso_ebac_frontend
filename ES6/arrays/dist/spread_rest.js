"use strict";

//O rest e a mesma coisa do spread so que usado no argumento da funcao

///Exemplo
//o ...numeros e trasformado em um array com todos argumantos passados
var soma = function soma() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  numeros.reduce(function (total, numAtual) {
    total += numAtual;
    return total;
  }, 0);
};
console.log(soma(1, 5, 10));

//Spread

var timeDeSP = ['Corinthians', 'Santos', 'Palmeiras', 'Sao Paulo'];
var timesDoRio = ['Flamengo', 'Fluminense', 'Vasco', 'Botafogo'];
var timesSPeRio = [].concat(timeDeSP, timesDoRio);
console.log(timesSPeRio);