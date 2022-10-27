// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})



// describe('Nombre del test', función con los diferentes pasos del test) // Realizar una prueba
// it('nombre del paso', función con las acciones de dicho paso) // Cada uno de los pasos dentro de la prueba

/*cy.visit // Ir a una url
cy.contains // Comprobar si la url en la que nos encontramos contiene lo que especificamos
cy.should('contains', '...')
cy.should('have.css', 'color', 'red') // Comprueba si la página está mostrando un elemento con una característica concreta
cy.request('GET', 'url', objeto) // Realiza una petición a una URL
cy.get('.clase')('#id')(['name'='juanjo']) // Para obtener un elemento, principalmente usado para ejecutar una acción sobre el mismo
// Acciones
  cy.click // Realizamos un click
  cy.type("Hola mundo") // Escribimos en un input
  // Ejemplo: cy.get('#email').type('juanjo@demo.com')
  as('juanjo').cy.get(['name'='juanjo'])*/