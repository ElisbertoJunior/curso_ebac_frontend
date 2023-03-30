class Pessoa {
  nome: string;
  renda?: number;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }

  dizOla(): string {
    return `${this.nome} disse oi`
  }

}

class ContaBancaria {
  protected saldo: number = 0;
  public numeroConta: number;

  constructor(numeroConta: number) {
    this.numeroConta = numeroConta;
  }

  gerSaldo() {
    return this.saldo;
  }

  setSaldo(valor: number) {
    this.saldo += valor
  }

}

class ContaPessoaFisica extends ContaBancaria {
  setSaldo(valor: number): void {
      this.saldo += valor * 2
  }
}

const contaDoJoao = new ContaPessoaFisica(123456);
