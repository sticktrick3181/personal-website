describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    // Inject the axe-core library
    cy.injectAxe()
  })

  it('Should load the correct URL', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should be accessible', () => {
    cy.checkA11y()
  })
})
