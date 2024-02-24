describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://practice-automation.com/modals/');
    cy.get('#simpleModal').click();
    cy.get('#popmake-1318').should('contain', 'Simple Modal');
    cy.get('#popmake-1318').find('.pum-close').click();
    cy.get('#popmake-1318').should('not.be.visible');
  })
})