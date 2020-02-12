/// <reference types="cypress" />

context('React Text Typing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should render h1 component', () => {
    cy.get('h1').should('not.be.undefined');
    cy.get('h1').contains('Example Text');
  });

  it('Should do effect', () => {
    cy.get('h1').should('not.be.undefined');
    cy.wait(2000);
    cy.get('h1').should('have.css', 'animation');
    cy.get('h1').should('have.css', 'position', 'relative');
    cy.get('h1').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
