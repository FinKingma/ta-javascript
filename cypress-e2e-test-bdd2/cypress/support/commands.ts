// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const url = 'https://sdcb.mxapps.io/index.html?profile=Responsive'

Cypress.Commands.add("login", (email, password) => {
    cy.visit(url)
    cy.get('[name="username"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('[value="Login"]').click()
})

Cypress.Commands.add("createConference", (name: string) => { 
    cy.get('div.mx-dataview-content').contains('div.mx-textbox', 'Title').find('input').type(name)
    cy.get('div.mx-dataview-content').contains('div.mx-textbox', 'Description').find('input').type(name)
    cy.get('div.mx-dataview-content').contains('div.row', 'Start time').find('select').first().select('_9')
    cy.get('div.mx-dataview-content').contains('div.row', 'End time').find('select').first().select('_18')
    cy.get('div.mx-dataview-content').get('.btn-success').click()
})