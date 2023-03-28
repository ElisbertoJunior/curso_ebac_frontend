//como retornar um array sem itens repetidos usando set

const array = ['Gian', 'laura', 'cris', 'elisberto', 'cris', 'laura']

const arrayComoSet = new Set([...array]);

const arraySemRepeticoes = [...arrayComoSet];

console.log(array)
console.log(arrayComoSet)
console.log(arraySemRepeticoes)