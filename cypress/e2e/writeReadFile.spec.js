/// <reference types="cypress"/> /

describe('Write and Read file', () => {
  let email = 'yura@gmail.com';
  let name = 'Yura';
  it('Write to file', () => {
    cy.writeFile('test-data/users.json', {'email' : email, 'name' : 'Yura'});
  })

  it('Read from file', () => {
    cy.readFile('test-data/users.json').then((user) =>{
      expect(user.email).to.equal('yura@gmail.com');
      expect(user.name).to.equal('yura')
    })
  })
})