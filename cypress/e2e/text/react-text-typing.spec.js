/// <reference types="cypress" />

context("React Text Typing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render h1 component", () => {
    cy.get("h1").should("not.be.undefined");
    cy.wait(6000);
    cy.get("h1").contains("Example Text");
  });

  it("Should do effect", () => {
    cy.get("h1").should("not.be.undefined");
    cy.wait(6000);
    cy.get("h1").should("have.css", "animation");
    cy.get("h1").should("have.css", "position", "relative");
    cy.get("h1").should("have.css", "color", "rgb(255, 0, 0)");
    cy.get("h1").then((el) => {
      const text = el[0].ownerDocument.defaultView;
      const before = text.getComputedStyle(el[0], "before");
      expect(before.getPropertyValue("color")).to.eq("rgb(255, 255, 255)");
    });
  });
});
