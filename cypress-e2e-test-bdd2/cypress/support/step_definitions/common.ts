import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

When('I create a new conference', () => {
  cy.get('a[title="Conferences"]').first().click({force: true})
  // cy.get("div.mx-progress").should("not.be.visible")
  cy.get('[data-mendix-id="4.Conference.Conference_Overview.actionButton2"]').click()
  cy.get("div.mx-window-active").should("be.visible")
})

When('I create a conference {string} with default data', (name: string) => {
  cy.get('a[title="Conferences"]').first().click({force: true})
  cy.get("div.mx-progress").should("not.be.visible")
  cy.get('[data-mendix-id="4.Conference.Conference_Overview.actionButton2"]').click()
  cy.get("div.mx-window-active").should("be.visible")

  cy.createConference(name)
})

Given('I login on the conference app as a conference manager', () => {
  cy.login('FinKingma', 'Kaaaas0')
})