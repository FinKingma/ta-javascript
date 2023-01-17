import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I login on the conference app as a user', () => {
  cy.login('paul.de.wit@gmail.com', 'Kaaaas0')
})

Then('I should land on the dashboard', () => {
  cy.get('h3.pageheader-title').should('contain', 'Dashboard')
})