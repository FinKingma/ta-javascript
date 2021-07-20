context('UI Test automation playground', () => {
  it('Dynamic ID', () => {
    cy.visit('http://uitestingplayground.com/dynamicid')
    cy.get('.btn-primary').click()
  })

  it('AJAX Data', () => {
    cy.visit('http://uitestingplayground.com/ajax')
    cy.get('#ajaxButton').click()
    cy.get('.bg-success', { timeout: 30000 }).should(
      'have.text',
      'Data loaded with AJAX get request.',
    )
  })

  it('Scrollbars', () => {
    cy.visit('http://uitestingplayground.com/scrollbars')
    cy.get('#hidingButton').click()
  })

  it('Visibility', () => {
    cy.visit('http://uitestingplayground.com/visibility')
    cy.get('#hideButton').click()
    cy.get('#removedButton').should('not.exist')
    cy.get('#zeroWidthButton').should('not.be.visible')

    let initialPosition
    cy.get('#overlappedButton').then(($button) => {
      initialPosition = $button.position()
    })
    cy.get('#hidingLayer').should(($button) => {
      expect($button.position()).deep.equal(initialPosition)
    })

    cy.get('#transparentButton').should('not.be.visible')
    cy.get('#invisibleButton').should('not.be.visible')
    cy.get('#notdisplayedButton').should('not.be.visible')

    // manually test for whether elem is out of viewport
    cy.get('#offscreenButton')
      .first()
      .then(($el) => {
        const rect = $el[0].getBoundingClientRect()

        expect(rect.top).to.be.lessThan(0)
        expect(rect.bottom).to.be.lessThan(0)
      })
  })
})
