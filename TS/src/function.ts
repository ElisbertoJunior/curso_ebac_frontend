function area(base: number, altura: number): number {
    return base * altura;
}

const area2 = (base: number, altura: number): number => base * altura;

function soma(...numeros: number[]): number {
  return numeros.reduce((acc, number): number => {
    acc += number
    return acc;
  }, 0);

}

console.log(soma(1, 3, 4, 7));
console.log(area2(1, 3));