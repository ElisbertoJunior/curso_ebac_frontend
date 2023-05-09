/// <reference types="cypress" />

describe('Testando as funcionalidades de inclusão, alteração e remoção de um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve ser capaz de adicionar um novo contato', () => {
    cy.get('input[type="text"]').type('Elisberto Junior')
    cy.get('input[type="email"]').type('elisbertojr@test.com')
    cy.get('input[type="tel"]').type('999999999')
    cy.get('.adicionar').click()
    cy.contains('Elisberto Junior').should('be.visible')
    cy.screenshot('tela-contato-adicionado')
  })
 
  it('Deve ser capaz de atlaterar um contato existente', () => {
    cy.contains('Editar').click()
    cy.get('input[type="text"]').clear().type('Contato Alterado')
    cy.get('input[type="email"]').clear().type('contatoalterado@ebac.com')
    cy.get('input[type="tel"]').clear().type('888888888')
    cy.get('.alterar').click()
    cy.contains('Contato Alterado').should('be.visible')
    cy.screenshot('tela-contato-alterado')
  })

  it('Deve ser capaz de remover contato existente', () => {
    cy.contains('Deletar').click()
    cy.contains('Contato Alterado').should('not.exist')
    cy.screenshot('tela-contato-deletado')
  })
  
   
})
