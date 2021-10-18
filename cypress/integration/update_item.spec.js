describe('updating a todo item', () => {
    it('update the item from list', () => {
      cy.visit('/');
  
      cy.get('[data-testid="inputItem"]')
        .type('update this item');
  
      cy.get('[data-testid="addButton"]')
        .click();
        
      cy.get('[data-testid="edit-icon"]').click();

      cy.get('[data-testid="updateItem"]').clear()

      cy.get('[data-testid="updateItem"]')
        .type('updated the item to this');

      cy.get('[data-testid="updateButton"]').click();
  
      cy.contains('updated the item to this');
      cy.contains('update this item').should('not.exist');
    });
  });