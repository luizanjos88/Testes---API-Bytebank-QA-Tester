# 🏦 ByteBank - Suite de Testes E2E com Cypress

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

Projeto de **automação de testes E2E** para a plataforma bancária ByteBank, usando **Cypress** e o padrão **Page Object Model (POM)** para garantir cobertura de funcionalidades críticas e manutenibilidade escalável.

---

## 📋 O que é Testado

- **Autenticação**: Login, validações de credenciais e erros
- **Cadastro**: Criação de contas com validação de campos
- **Perfil e Configurações**: Edição de dados do usuário
- **Home Page**: Sanidade geral da interface
- **Transações**: Fluxos de depósitos e transferências
- **Cartões**: Acesso e visualização de cartões bancários

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
git clone https://github.com/luizanjos88/Testes---API-Bytebank-QA-Tester.git
cd "teste API - ByteBank"
npm install
```

### Iniciar o Ambiente

Você precisa de **dois terminais**:

**Terminal 1 - Backend (JSON Server):**
```bash
npm run api
# Disponível em: http://localhost:8080
```

**Terminal 2 - Frontend (React):**
```bash
npm start
# Disponível em: http://localhost:3000
```

---

## 🧪 Executar Testes

### Modo Interativo
```bash
npx cypress open
```
Abre a interface gráfica do Cypress para rodar testes manualmente.

### Modo Headless (CI/CD)
```bash
npx cypress run
```
Executa todos os testes em background.

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                          # Testes
│   ├── formularioCadastro.cy.js  # Validação de cadastro
│   ├── formularioLogin.js        # Testes de autenticação
│   └── ...
├── pages/                        # Page Objects
│   ├── loginPage.js              # Seletores e ações de login
│   └── cadastroPage.js           # Seletores e ações de cadastro
├── fixtures/                     # Dados de teste
│   └── usuarios.json             # Usuários para testes
└── support/                      # Configurações globais
```

---

## 🏗️ Padrão Page Object Model (POM)

Os page objects centralizam os **seletores** e **ações** de cada página, separando-os dos testes. Isso facilita:
- Reutilização de código
- Manutenção: alterações são feitas uma vez
- Legibilidade dos testes

**Exemplo (`cadastroPage.js`):**
```javascript
class CadastroPage {
  selectorsCadastro() {
    return {
      nome: '[data-test="nome-input"]',
      email: '[data-test="email-input"]',
      senha: '[data-test="senha-input"]',
      botaoEnviar: '[data-test="botao-enviar"]'
    };
  }

  cadastroSucesso(nome, email, senha) {
    cy.get(this.selectorsCadastro().nome).type(nome);
    cy.get(this.selectorsCadastro().email).type(email);
    cy.get(this.selectorsCadastro().senha).type(senha);
    cy.get(this.selectorsCadastro().botaoEnviar).click();
  }
}
```

---

## 🛠️ Stack Tecnológico

| Ferramenta | Uso |
|-----------|-----|
| **Cypress** | Test runner e2e |
| **React.js** | Frontend |
| **JSON Server** | Mock de API |
| **Yup** | Schema de validação |
| **Node.js** | Runtime |

---

## 📝 Licença

Projeto educacional desenvolvido durante formação de QA na **Alura**.

---

**Mantido por:** Luiz Anjos
