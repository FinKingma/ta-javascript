context('UI Test automation playground', () => {

  it('Class Attribute', () => {
    cy.visit('http://uitestingplayground.com/classattr')
    cy.get('.btn-primary').click()
    cy.on('window:confirm', () => true)
  })

  it('Client Side Delay', () => {
    cy.visit('http://uitestingplayground.com/clientdelay')
    cy.get('#ajaxButton').click()
    cy.get('.bg-success', { timeout: 30000 }).should(
      'have.text',
      'Data calculated on the client side.',
    )
    cy.get('.bg-success').click()
  })

  it('Dynamic Table', () => {
    cy.visit('http://uitestingplayground.com/dynamictable')
    let chromePercentage
    cy.get('div[role="table"]')
      .contains('div[role="row"]', 'Chrome')
      .contains('span[role="cell"]', '%')
      .then(($el) => {
        expect($el, 'text content').to.contain.text('%')
        cy.get('.bg-warning').should('contain', $el.text())
      })
  })

  it('Sample App', () => {
    cy.visit('http://uitestingplayground.com/sampleapp')
    cy.get('input[name="UserName"]').type('Fin')
    cy.get('input[name="Password"]').type('pwd')
    cy.get('#login').click()
    cy.get('#loginstatus').should('contain', 'Welcome, Fin!')
  })
})
