/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa',()=>{
  
  it.skip ('Caso de teste: Registrando um usuário no site com sucesso',()=>{ 

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Ana Luiza')
    cy.get('#Text1').type('Taveira')
    cy.get('#username').type('anataveira')
    cy.get('#password').type('1234')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it.skip ('Caso de teste: Registrando um usuário com falha (faltando senha)',()=>{ 

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Ana Luiza')
    cy.get('#Text1').type('Taveira')
    cy.get('#username').type('anataveira')
    cy.get('#password').type('1234')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text','Password is required')
    cy.get('.btn-primary').should('be.disabled')
    })

    it ('Caso de teste: Realizando um login com sucesso',()=>{ 
        let info = criarUsuario()
        cy.get('#username').type(info[0])
        cy.get('#password').type(info[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should('contain.text',info[0])
      })

})

function criarUsuario() {
  
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas + minutos + segundos + 'Id' 
  let senha = horas +minutos + segundos + 'senha'
  let userInfo = [user,senha]


  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type(user)
      cy.get('#Text1').type(user)
      cy.get('#username').type(user)
      cy.get('#password').type(senha)
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('contain.text', 'Registration successful')


      return userInfo
}