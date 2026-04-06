

class LoginPage {

    selectorsLogin() {
        const selectors = {
            botaoLogin: '[data-test="botao-login"]',
            emailInput: '[data-test="email-input"]',
            senhaInput: '[data-test="senha-input"]',
            botaoEnviar: '[data-test="botao-enviar"]',
            mensagemErro: '[data-test="mensagem-erro"]',
        }
        return selectors;
    }


    loginSucesso(email, senha, nome) {

        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().emailInput).type(email);
        cy.get(this.selectorsLogin().senhaInput).type(senha);
        cy.get(this.selectorsLogin().botaoEnviar).click();
        cy.location('pathname').should('eq', '/home');
        cy.contains(nome).should('be.visible');
    }

    loginInvalidoSenhaIncorreta(email, senhaIncorreta) {
        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().emailInput).type(email);
        cy.get(this.selectorsLogin().senhaInput).type(senhaIncorreta);
        cy.get(this.selectorsLogin().botaoEnviar).click();
    }
    loginInvalidoEmailIncorreto(emailIncorreto, senha) {
        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().emailInput).type(emailIncorreto);
        cy.get(this.selectorsLogin().senhaInput).type(senha);
        cy.get(this.selectorsLogin().botaoEnviar).click();
    }

    verificarMensagemErro() {
        cy.get('span').should('be.visible').and('contain', 'Email ou senha inválidos');
    }

    loginCamposVazios() {
        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().botaoEnviar).click();
        cy.get(this.selectorsLogin().mensagemErro).should('be.visible').and('contain', 'O campo de senha é obrigatório');
    }

    loginEmailVazio(senha) {
        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().senhaInput).type(senha);
        cy.get(this.selectorsLogin().botaoEnviar).click();
        cy.get(this.selectorsLogin().mensagemErro).should('be.visible').and('contain', 'O campo email é obrigatório');
    }

    loginSenhaVazia(email) {
        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().emailInput).type(email);
        cy.get(this.selectorsLogin().botaoEnviar).click();
        cy.get(this.selectorsLogin().mensagemErro).should('be.visible').and('contain', 'O campo de senha é obrigatório');
    }
}

export default LoginPage;

