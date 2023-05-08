/// <reference types="cypress" />;
describe("Testes para a pagina de candidato", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("Deve levar o usuario ate o formulario de inscricao ", () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input').should('have.length', 7)
    cy.screenshot('tela-incricao')
  });

  it("Deve preencher o formulario de inscricao", () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input[name="nome-completo"]').type('Elisberto Junior')
    cy.get('input[name="email"]').type('elisberto_jr@hotmail.com')
    cy.get('input[name="telefone"]').type('62 992533318')
    cy.get('input[name="endereco"]').type('Rua A21 Qd19 Lt02 Bairro Vitoria, Goania-GO')
    cy.get('select[name="escolaridade"]').select('outros')
    cy.get('#linux').check()
    cy.get('.Aplicacao_button__tw2AE').click()

    cy.on('window:alert', (conteudo) => {
      expect(conteudo).contain('Obrigado pela candidatura!')
    })

    cy.screenshot('tela-incricao-preenchida')
  })

  
});
