describe('deleting a todo item', () => {
    it('removes the item from list', () => {
      cy.visit('/');
  
      cy.get('[data-testid="inputItem"]')
        .type('delete this item');
  
      cy.get('[data-testid="addButton"]')
        .click();
        
    cy.get('[data-testid="delete-icon"]').click();
  
      cy.contains('delete this item').should('not.exist');
    });
  });