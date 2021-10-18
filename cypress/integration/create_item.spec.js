describe('creating a todo item', () => {
    it('displays the to do item', () => {
      cy.visit('../public/index.html');
  
      cy.get('[data-testid="inputItem"]')
        .type('Walk the dog');
  
      cy.get('[data-testid="addButton"]')
        .click();
  
      cy.get('[data-testid="inputItem"]')
        .should('have.value', '');
  
      cy.contains('Walk the dog');
    });
  });