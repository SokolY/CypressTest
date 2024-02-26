describe('Files Upload', () => {
  it('Try to Upload Incorect file', () => {
    cy.visit('https://practice-automation.com/file-upload/');
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
    cy.get('[data-name="file-941"]').should('contain.text', 'You are not allowed to upload files of this type.');
  })

  it('Try to Upload Correct file', () => {
    cy.visit('https://practice-automation.com/file-upload/');
    cy.get('#file-upload').selectFile('cypress/fixtures/test.jpg');
    cy.get('#file-upload').invoke('prop', 'value').should('contain', 'test.jpg');
  })
})