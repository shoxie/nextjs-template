/// <reference types="cypress"/>

describe("Home Page example test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a message", () => {
    cy.get("h1").contains("Welcome");
  });

  it("should render the change language button", () => {
    cy.get("button").contains("Click me to change language");
  });

  it("should be able to change language", () => {
    cy.get("button").contains("Click me to change language").click();
    cy.get("h1").should("have.text", "Xin chào");
    cy.get("button").contains("Click me to change language").click();
    cy.get("h1").should("have.text", "Welcome");
  });
});

export {};
