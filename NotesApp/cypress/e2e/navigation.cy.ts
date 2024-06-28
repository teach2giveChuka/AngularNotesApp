describe('Navigation Link Functionality', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should navigate to the home page', () => {
      cy.contains('Home').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  
    it('should navigate to the notes page when Notes is clicked', () => {
        cy.get('.navlink').contains('Notes').click();
        cy.url().should('include', '/notes'); 
      });
  
    it('should navigate to the new note page', () => {
      cy.contains('New Note').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/newnote');
    });
  });