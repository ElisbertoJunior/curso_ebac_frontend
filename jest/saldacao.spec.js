const sauidacao = require('./saudacao');

describe('Testes para saudacao', () => {
  test('Devera retornar Ola, Maria', () => {
    const olaMaria = sauidacao.dizOla('Maria')
    expect(olaMaria).toBe('Ola, Maria')
  })
})