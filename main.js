function Employee(name, position, salary) {
  this.name = name,
  this.position = position;
  
  let _salary = salary;

  this.getSalary = function() {
    return _salary;
  }

  this.setSalary = function(value) {
    if(typeof value === 'number') {
      _salary = value
    }
  }

  this.presentation = function() {
    console.log(`Ola eu sou ${this.name} e sou ${this.position} nesta empresa e meu salario e de: ${this.getSalary()}`);
  }

}

function Analyst(name) {
  Employee.call(this, name, "Analista", 2000);
}

function Coordinator(name) {
  Employee.call(this, name, "Coordenador", 3500);
}

function Manager(name) {
  Employee.call(this, name, "Gerente", 7000);
}

const firstAnalyst = new Analyst('Tatiane');
const firstCoordinator = new Coordinator('Luiz');
const firstManager = new Manager('Karina');

firstAnalyst.setSalary(3000);
firstCoordinator.setSalary(4300);
firstManager.setSalary(9800);

firstAnalyst.presentation();
firstCoordinator.presentation();
firstManager.presentation();



