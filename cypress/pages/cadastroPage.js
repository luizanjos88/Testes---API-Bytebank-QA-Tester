class CadastroPage {

    selectorsCadastro(){
        const selectors ={
        botaoCadastro: '[data-test="botao-cadastro"]',
        nome: '[data-test="nome-input"]',
        email: '[data-test="email-input"]',
        senha: '[data-test="senha-input"]',
        botaoEnviar: '[data-test="botao-enviar"]',
        mensagemSucesso: '[data-test="mensagem-sucesso"]',
        mensagemErro:'[data-test="mensagem-erro"]',
        body:'body'
        
    }
        return selectors;
    }

    cadastroSucesso(nome,email,senha){
        cy.get(this.selectorsCadastro().botaoCadastro).click();
        cy.get(this.selectorsCadastro().nome).type(nome);
        cy.get(this.selectorsCadastro().email).type(email);
        cy.get(this.selectorsCadastro().senha).type(senha);
        cy.get(this.selectorsCadastro().botaoEnviar).click();
        cy.get(this.selectorsCadastro().mensagemSucesso).should('be.visible');
    }
    cadastrosCamposBrancos () {
        
        cy.get(this.selectorsCadastro().botaoCadastro).click();
        cy.get(this.selectorsCadastro().botaoEnviar).click();
        cy.get(this.selectorsCadastro().mensagemErro).should('be.visible').contains('O campo de senha é obrigatório');
    }
    
    

    cadastronomeemBranco(senha,email) {

        cy.get(this.selectorsCadastro().botaoCadastro).click();
        cy.get(this.selectorsCadastro().senha).type(senha);
        cy.get(this.selectorsCadastro().email).type(email);
        cy.get(this.selectorsCadastro().botaoEnviar).click();
        cy.get(this.selectorsCadastro().mensagemErro).should('be.visible').contains('O campo de nome é obrigatório');


     }

 }
export default CadastroPage;