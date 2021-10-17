describe('creating a todo item', () => {
    it('Displays the message in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="item"]')
        .type('Walk the dog');
  
      cy.get('[data-testid="addButton"]')
        .click();
  
      cy.get('[data-testid="item"]')
        .should('have.value', '');
  
      cy.contains('Walk the dog');
    });
  });