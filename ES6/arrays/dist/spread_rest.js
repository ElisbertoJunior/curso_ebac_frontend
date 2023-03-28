"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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

//desestruturacao com alias(apelido)

var _carroDoJoao = carroDoJoao,
  modeloJoao = _carroDoJoao.modelo;

//desestruturacao de arrays

var _timesSPeRio = _slicedToArray(timesSPeRio, 2),
  item1 = _timesSPeRio[0],
  item2 = _timesSPeRio[1];