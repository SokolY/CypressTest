/// <reference types="cypress"/>
describe('Fixture test', () => {
  it('passes', () => {
    cy.visit('https://practice-automation.com/modals');
    cy.get('#formModal').click();
    cy.fixture('example.json').then((userData)=>{
      cy.get('[name="g1051-name"]').type(userData.name);
      cy.get('input.email').type(userData.email);
      cy.get('#contact-form-comment-g1051-message').type(userData.body);
      cy.contains("Submit").click();
      cy.get('#popmake-674').should('not.be.visible');
    })
  })
})