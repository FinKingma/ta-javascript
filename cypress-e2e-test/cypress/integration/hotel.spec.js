context('hotel', () => {

  it('custom command and intercept', () => {
    cy.intercept("GET", "http://adactinhotelapp.com/img/AdactIn_logo.png", {fixture: 'Edge.png' })
    cy.login('finkingma', '14S2WR');
  })
})
