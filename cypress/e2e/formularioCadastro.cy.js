

import Chance from 'chance';

const chance = new Chance();

const nome = chance.name();
const email = chance.email();
const senha = chance.string({ length: 6 });

describe('Formulário Cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(nome);
    cy.getByData('email-input').type(email);
    cy.getByData('senha-input').type(senha);
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!');
  })

  it('Deve permitir que a pessoa usuária recem cadastrada acesse a aplicação', () => {

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type(email);
    cy.getByData('senha-input').type(senha);
    cy.getByData('botao-enviar').click();
    cy.location('pathname').should('eq', '/home');

  })
})