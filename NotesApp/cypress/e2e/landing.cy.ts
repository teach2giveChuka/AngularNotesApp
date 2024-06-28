describe('Landing Page Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust this if your landing page has a different URL
  });

  it('should display the navbar', () => {
    cy.get('header').should('exist');
    cy.get('.logo').should('contain', 'Me~Notes');
    cy.get('.nav').should('exist');
    cy.get('.navlink').should('have.length', 3);
  });

  it('should navigate to the home page when Home is clicked', () => {
    cy.get('.navlink').contains('Home').click();
    cy.url().should('include', '/'); // Assuming '/' is your home route
  });

  it('should navigate to the notes page when Notes is clicked', () => {
    cy.get('.navlink').contains('Notes').click();
    cy.url().should('include', '/notes'); // Adjust according to your app's route
  });

  it('should navigate to the new note page when New Note is clicked', () => {
    cy.get('.navlink').contains('New Note').click();
    cy.url().should('include', '/newnote'); // Adjust according to your app's route
  });
});