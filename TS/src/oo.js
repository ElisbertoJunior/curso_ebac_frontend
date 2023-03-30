"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    gerSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo += valor;
    }
}
class ContaPessoaFisica extends ContaBancaria {
    setSaldo(valor) {
        this.saldo += valor * 2;
    }
}
const contaDoJoao = new ContaPessoaFisica(123456);
