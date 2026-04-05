// cypress.config.js
const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        gerarUsuariosFixture() {
          const dbPath = path.resolve(__dirname, 'db.json')
          const fixturePath = path.resolve(__dirname, 'cypress', 'fixtures', 'usuarios.json')

          if (fs.existsSync(dbPath)) {
            const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'))
            // O db.json tem a chave 'users', vamos salvar como a fixture solicitada
            fs.writeFileSync(fixturePath, JSON.stringify(dbData.users, null, 2))
            return null
          }
          return null
        }
      })
    },
  }
})
