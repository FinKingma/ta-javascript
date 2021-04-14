import { Then, When } from "cypress-cucumber-preprocessor/steps";

Then('I should not be able to select a start time before 8', () => {
    cy.contains('div.row', 'Start time').find('select').should('be.visible')
    cy.contains('div.row', 'Start time').find('select').first().first().should('not.have.value', '_7')
})

Then('I should not be able to select an end time after 22', () => {
    cy.contains('div.row', 'End time').find('select').should('be.visible')
    cy.contains('div.row', 'End time').find('select').first().first().should('not.have.value', '_23')
})

Then('I should be able to view conference {string}', (name) => {
    cy.get('a[title="Conferences"]').first().click({force: true})
    cy.contains('div.mx-grid-content td', name).should('be.visible')
})