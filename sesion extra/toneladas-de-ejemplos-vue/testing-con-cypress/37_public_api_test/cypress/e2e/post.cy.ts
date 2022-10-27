describe('post test', () => {
  beforeEach( () =>  {
    cy.visit('http://localhost:8080');
    cy.url().should('eq', 'http://localhost:8080/posts');
  }),
  it('user can access the page', () => {
    cy.contains('Listado de post');
  }),
  it('user can access detail post view',  () => {
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click();
    cy.contains('autem sunt rem eveniet architecto');
  }),
  it('user can go back from detail post view', () => {
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click();
    cy.get('.link').click();
    cy.contains('Listado de post');
  })
})