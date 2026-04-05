class LoginPage {

    selectorsLogin() {
        const selectors = {
            botaoLogin: '[data-test="botao-login"]',
            emailInput: '[data-test="email-input"]',
            senhaInput: '[data-test="senha-input"]',
            botaoEnviar: '[data-test="botao-enviar"]',
        }
        return selectors;
    }


    preencherDadosLogin(email, senha) {
        cy.get(this.selectorsLogin().botaoLogin).click();
        cy.get(this.selectorsLogin().emailInput).type(email);
        cy.get(this.selectorsLogin().senhaInput).type(senha);
        this.clickBotaoEnviar();
    }

    verificarPaginaHome(nome) {
        cy.location('pathname').should('eq', '/home');
        cy.contains(nome).should('be.visible');
    }

    verificarMensagemErro() {
        cy.get('span').should('be.visible').and('contain', 'Email ou senha inválidos');
    }

    clickBotaoEnviar() {
        cy.get(this.selectorsLogin().botaoEnviar).click();
    }
}

export default LoginPage;
