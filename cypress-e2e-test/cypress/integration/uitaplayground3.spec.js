context('UI Test automation playground', () => {

  it('Hidden Layers', (done) => {
    cy.visit('http://uitestingplayground.com/hiddenlayers')
    cy.get('#greenButton').click()
    cy.get('#blueButton').should('be.visible')

    cy.once('fail', (err) => {
      expect(err.message).to.include('is being covered by another element')

      done()
    })

    cy.get('#greenButton')
      .click()
      .then((x) => {
        done(
          new Error(
            'Expected button NOT to be clickable, but click() succeeded',
          ),
        )
      })
  })

  it('Click', () => {
    cy.visit('http://uitestingplayground.com/click')
    cy.get('#badButton').click()
    cy.get('#badButton').should('have.class', 'btn-success')
  })

  it('Verify Text', () => {
    cy.visit('http://uitestingplayground.com/verifytext')
    cy.get('.bg-primary').contains('Welcome UserName!').should('exist')
  })

  it('Mouse Over', () => {
    cy.visit('http://uitestingplayground.com/mouseover')
    cy.contains('a', 'Click me').click()
    cy.contains('a', 'Click me').click()
    cy.get('#clickCount').should('have.text', '2')
  })
})
