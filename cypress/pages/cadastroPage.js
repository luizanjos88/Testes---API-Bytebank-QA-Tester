
class CadastroPage {
    selectorsCadastro() {
        return {
            botãoCadastro: '[data-test="botao-cadastro"]',
            nome: '[data-test="nome-input"]',
            email: '[data-test="email-input"]',
            senha: '[data-test="senha-input"]',
            botaoEnviar: '[data-test="botao-enviar"]',
            mensagemErro: '[data-test="mensagem-erro"]',
        }
    }

    cadastroSucesso(nome, email, senha) {
        cy.get(this.selectorsCadastro().botãoCadastro).click();
        cy.get(this.selectorsCadastro().nome).type(nome);
        cy.get(this.selectorsCadastro().email).type(email);
        cy.get(this.selectorsCadastro().senha).type(senha);
        cy.get(this.selectorsCadastro().botaoEnviar).click();
    }

    cadastrosCamposBrancos() {
        cy.get(this.selectorsCadastro().botãoCadastro).click();
        cy.get(this.selectorsCadastro().botaoEnviar).click();
        cy.get(this.selectorsCadastro().mensagemErro).should('be.visible').and('contain', 'O campo de senha é obrigatório');
    }

    cadastronomeemBranco(senha, email) {
        cy.get(this.selectorsCadastro().botãoCadastro).click();
        cy.get(this.selectorsCadastro().email).type(email);
        cy.get(this.selectorsCadastro().senha).type(senha);
        cy.get(this.selectorsCadastro().botaoEnviar).click();
        cy.get(this.selectorsCadastro().mensagemErro).should('be.visible').and('contain', 'O campo de nome é obrigatório');
    }
}

export default CadastroPage;