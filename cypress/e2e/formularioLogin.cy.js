import LoginPage from "../pages/loginPage";
const loginPage = new LoginPage();
const emailInvalido = 'email@invalido.com';

describe('Teste pagina de login', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('usuarios').as('usuarios');
    });

    it('Deve realizar login com sucesso', function () {
        loginPage.loginSucesso(this.usuarios[0].email, this.usuarios[0].senha, this.usuarios[0].nome);

    });

    it('Não deve realizar login com senha incorreta, e apresentar mensagem de erro', function () {
        loginPage.loginInvalidoSenhaIncorreta(this.usuarios[0].email, this.usuarios[3].senha);
        loginPage.verificarMensagemErro();
    });

    it('Não deve realizar login com email incorreto, e apresentar mensagem de erro', function () {
        loginPage.loginInvalidoEmailIncorreto(emailInvalido, this.usuarios[0].senha);
        loginPage.verificarMensagemErro();
    });

    it('Não deve realizar login com campos vazio, e apresentar mensagem de erro', () => {
        loginPage.loginCamposVazios();
    });

    it('Não deve realizar login com campo email vazio, e apresentar mensagem de erro', function () {
        loginPage.loginEmailVazio(this.usuarios[0].senha);
    });

    it('Não deve realizar login com campo senha vazio, e apresentar mensagem de erro', function () {
        loginPage.loginSenhaVazia(this.usuarios[0].email);
    });
});