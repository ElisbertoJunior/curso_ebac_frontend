function Pessoa(nome) {
  this.nome = nome,
  this.dizOi = function() {
    console.log(this.nome + " Diz oi");
  }
  
}

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo,
  this.salario = salario
  this.dizCargo = function() {
    console.log(this.cargo)
  }
  
  Pessoa.call(this, nome)
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev front-end", 4000);
funcionario1.dizOi();
funcionario1.dizCargo();