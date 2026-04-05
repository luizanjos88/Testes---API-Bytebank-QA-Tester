import LoginPage from "../pages/loginPage";
const loginPage = new LoginPage();
const emailInvalido = 'email@invalido.com';

describe('Teste de login', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('usuarios').as('usuarios');
    });

    it('Deve realizar login com sucesso', function () {
        loginPage.preencherDadosLogin(this.usuarios[0].email, this.usuarios[0].senha);
        loginPage.verificarPaginaHome(this.usuarios[0].nome);
    });

    it('Não deve realizar login com senha incorreta', function () {
        loginPage.preencherDadosLogin(this.usuarios[0].email, this.usuarios[3].senha);
        loginPage.verificarMensagemErro();
    });

    it('Não deve realizar login com email incorreto', function () {
        loginPage.preencherDadosLogin(emailInvalido, this.usuarios[0].senha);
        loginPage.verificarMensagemErro();
    });

    it('Não deve realizar login com campos vazio', () => {
        cy.getByData('botao-login').click();
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('be.visible').and('contain', 'O campo de senha é obrigatório');
    });

    it('Não deve realizar login com campo email vazio', function () {
        cy.getByData('botao-login').click();
        cy.getByData('senha-input').type(this.usuarios[0].senha);
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('be.visible').and('contain', 'O campo email é obrigatório');
    });

    it('Não deve realizar login com campo senha vazio', function () {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type(this.usuarios[0].email);
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('be.visible').and('contain', 'O campo de senha é obrigatório');
    });
}); 
