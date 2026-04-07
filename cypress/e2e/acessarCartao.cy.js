describe('Testando múltiplas páginas', () => {
  it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('luiz.anjos@edu.mt.gov.br')
    cy.getByData('senha-input').type('123456')
    cy.get('[data-test="botao-enviar"]').click()

    cy.location('pathname', { timeout: 10000 }).should('eq', '/home')

    cy.getByData('app-home').should('be.visible').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')

    cy.location('pathname').should('eq', '/home/cartoes')
  })
})