describe('Login', () => {
 beforeEach( () => {
  cy.visit('http://localhost:8080/login');
 }),
 it('user try to log in with wrong password', () => {
  cy.get('[data-test-id="email"]').type("juanjo@imaginagroup.com");
  cy.get('[data-test-id="password"]').type("qwerty");
  cy.get('.login-form-btn').click();
  cy.contains('wrong-password');
 }),
 it('user try to log in with wrong user', () => {
  cy.get('[data-test-id="email"]').type("jjo@imaginagroup.com");
  cy.get('[data-test-id="password"]').type("12345678");
  cy.get('.login-form-btn').click();
  cy.contains('user-not-found');
 }),
 it('user can log in correctly', () => {
  cy.get('[data-test-id="email"]').type("juanjo@imaginagroup.com");
  cy.get('[data-test-id="password"]').type("12345678");
  cy.get('.login-form-btn').click();
 })
})