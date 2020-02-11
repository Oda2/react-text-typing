/// <reference types="cypress" />

context('React Text Typing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should render h1 component', () => {
    cy.get('h1').should('not.be.undefined');
    cy.get('h1').contains('Example Text');
  });
});
