describe('Tables Interaction', () => {
  it('Tables Interaction', () => {
    cy.visit('https://practice-automation.com/tables/')
    cy.get('.wp-block-table').within(() =>{
      cy.get('tr').eq(1).find('td').should('contain', 'Oranges');
      cy.get('tr').eq(2).find('td').eq(1).should('contain', '$1200.00');
    })
  })
})