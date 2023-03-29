class Pokemon {
  // O # Torna o att privado
  #hp = 100;

  constructor(pokemonName, pokemonType, pokemonAttack) {
    this.name = pokemonName,
    this.type = pokemonType,
    this.attack = pokemonAttack
  }

  attackPokemon() {
    console.log(`O Pekemon ${this.name} atacou com ${this.attack}! `)
  }

  receivedAttack() {
    this.#hp -= 10;
  }

  displayHp() {
    console.log(this.#hp)
  }

}

class Pikachu extends Pokemon {
  constructor() {
    super('Pikachu', 'Eletric', 'Choque do trovao')
  }

  
}

const myPikachu = new Pikachu();


myPikachu.receivedAttack();

myPikachu.attackPokemon();

myPikachu.displayHp();

