import CadastroPage from '../pages/cadastroPage';
import LoginPage from '../pages/loginPage';

import Chance from 'chance';

const chance = new Chance();
const loginPage = new LoginPage();
const cadastroPage = new CadastroPage();

const nome = chance.name();
const email = chance.email();
const senha = chance.string({ length: 6 });


describe('Formulário Cadastro', () => {
  beforeEach(() => {
    cy.task('gerarUsuariosFixture')
    cy.visit('/')

  })


  it('Usuário deve conseguir se cadastrar com sucesso e permitir que a pessoa usuária recem cadastrada acesse a aplicação', () => {
    cadastroPage.cadastroSucesso(nome, email, senha);
    loginPage.loginSucesso(email, senha, nome);
  })

  it('Usuário deve deixar os campos todos em branco e clicar em cadastrar, deve aparecer a mensagem de erro e evitar o cadastramento', () => {
    cadastroPage.cadastrosCamposBrancos();
  })

  
  it('Usuário deve deixar os campos nome em branco e clicar em cadastrar, deve aparecer a mensagem de erro e evitar o cadastramento', () => {
    cadastroPage.cadastronomeemBranco(senha,email);


})
})
