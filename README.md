# 🏦 Bytebank - Testes E2E com Cypress

Bem-vindo ao **Bytebank**, uma aplicação financeira moderna desenvolvida em React, utilizada como base para o aprendizado e prática de testes de ponta a ponta (E2E) utilizando o framework **Cypress**.

---

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar fluxos reais de teste em uma plataforma de serviços bancários. Aqui, focamos na automação de processos como cadastro de usuários, login e a jornada completa de transações.

### 🧪 Funcionalidades Testadas
- 🔐 **Login de Usuário**: Verificação de credenciais e acesso seguro.
- 📝 **Cadastro**: Fluxo de criação de nova conta.
- 🚀 **Navegação**: Testes de rotas e menus de navegação.
- 💰 **Jornada do Usuário**: Teste completo de transações e saldo pós-operação.

---

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada)
- Gerenciador de pacotes (npm ou yarn)

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar a API (Backend Mock)**:
   A aplicação utiliza o `json-server` para simular um banco de dados.
   ```bash
   npm run api
   ```
   *A API ficará disponível em http://localhost:8080*

3. **Iniciar o Frontend**:
   Em um novo terminal, execute:
   ```bash
   npm start
   ```
   *O app abrirá automaticamente em http://localhost:3000*

---

## 🧪 Executando os Testes

Com o projeto e a API rodando, você pode executar o Cypress de duas maneiras:

### 🖥️ Interface Gráfica (Interativo)
Para abrir o Cypress Test Runner:
```bash
npx cypress open
```

### 📟 Modo Headless (Console)
Para rodar todos os testes diretamente no terminal:
```bash
npx cypress run
```

---

## 📁 Estrutura de Testes

Os testes estão organizados em `cypress/e2e`:
- `inicio.cy.js`: Testes da página inicial e elementos básicos.
- `formularioCadastro.cy.js`: Validações de criação de conta.
- `formularioLogin.cy.js`: Testes de autenticação.
- `paginas.cy.js`: Testes de navegação entre rotas.
- `jornadaUsuario.cy.js`: Fluxos complexos de transações.

---

## 🧰 Tecnologias Principais

- **React**: Biblioteca para construção da interface.
- **Cypress**: Framework principal para testes E2E.
- **Axios**: Consumo da API de dados.
- **JSON Server**: Mock de dados para ambiente de desenvolvimento e teste.
- **Yup**: Validações de formulários.

---

## 📝 Licença
Este projeto é puramente educacional. Sinta-se à vontade para explorar e aprender!

---
*Desenvolvido durante o curso de Cypress na Alura.*
