import Chance from 'chance';

const chance = new Chance();
const valorTransferencia = chance.integer({ min: 1, max: 1000 });


describe('Jornadas de usuário', () => {
  beforeEach(() => {
    cy.task('gerarUsuariosFixture'); // Garante que a fixture está sincronizada com o db.json
    cy.visit('/');
    cy.fixture('usuarios').as('usuarios'); // Carrega a fixture como um Alias
  });

  it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', function () {


    cy.getByData('botao-login').click();

    cy.getByData('email-input').type(this.usuarios[5].email);
    cy.getByData('senha-input').type(this.usuarios[5].senha);
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');
    cy.contains(this.usuarios[5].nome).should('be.visible');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type(valorTransferencia);
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains(`- R$ ${valorTransferencia}`);

    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');


  });
});
