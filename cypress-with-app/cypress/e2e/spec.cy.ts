describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('p').should('have.text', 'Welcome!')
  })
})