describe('Login flow', () => {
  it('logs in successfully with valid credentials', () => {
    // visit root (webpack-dev-server serves index.html)
    cy.visit('/');

    // enter credentials for the account defined in storage/account.json
    cy.get('input[placeholder="Enter Username"]').type('SomeUser_name');
    cy.get('input[placeholder="password"]').type('TopSecret1234!');
    cy.contains('LOGIN').click();

    // header should show the logged in user's name
    cy.contains('Hello SomeName');
  });
});
