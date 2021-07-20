context('UI Test automation playground', () => {
  it('Load Delays', () => {
    cy.visit('http://uitestingplayground.com/loaddelay')
    cy.get('.btn-primary').click()
  })

  it('Text input', () => {
    cy.visit('http://uitestingplayground.com/textinput')
    cy.get('#newButtonName').type('SPARTAA')
    cy.get('#updatingButton').click()
    cy.get('#updatingButton').should('have.text', 'SPARTAA')
  })

  it('Progress Bar', () => {
    cy.visit('http://uitestingplayground.com/progressbar')
    cy.get('#startButton').click()
    cy.get('#progressBar').contains('75%', { timeout: 30000 })
    cy.get('#stopButton').click()
  })

  it('Non-Breaking Space', () => {
    cy.visit('http://uitestingplayground.com/nbsp')
    cy.contains('button', 'My Button').click()
  })
})
