//testing from server


describe('Notes Display and Functionality', () => {
    beforeEach(() => {
      cy.visit('/notes');
    });
  
    it('Successfully fetches and displays notes', () => {
        cy.get('.note-card').should('have.length.at.least', 1);
        cy.get('.note-card h4 p').first().should('not.be.empty');
        cy.get('.note-card p').first().should('not.be.empty');
      });
  
      it('Displays update form when update button is clicked', () => {
        cy.get('.update-button').first().click();
        cy.get('.update-form-wrapper').should('be.visible');
      });
  
      it('Deletes a note when delete button is clicked', () => {
        cy.get('.note-card').should('have.length.at.least', 1);
        cy.get('.delete-button').first().click();
        cy.get('.note-card').should('have.length.at.least', 0);
      });
      it('Displays single note when selected', () => {

        cy.get('.note-card').first().click();
    
        cy.get('.single-note-wrapper').should('be.visible');
    
    
      });
  });

  /**
   * testting from notes.json
   * describe('Notes Display and Functionality', () => {
  beforeEach(() => {
    // Load test data from notes.json fixture
    cy.fixture('notes.json').then((notes) => {
      cy.intercept('GET', '/notes', notes).as('getNotes');
    });
    cy.visit('/notes');
    cy.wait('@getNotes');
  });

  it('Successfully fetches and displays notes', () => {
    cy.get('.note-card').should('have.length', 5); // Adjust the number based on your test data
    cy.get('.note-card h4 p').first().should('contain.text', 'Note 1 Title');
    cy.get('.note-card p').first().should('contain.text', 'Note 1 Content');
  });

  it('Displays no notes message when no notes are available', () => {
    cy.intercept('GET', '/notes', []).as('getEmptyNotes');
    cy.visit('/notes');
    cy.wait('@getEmptyNotes');
    cy.contains('No notes available.').should('be.visible');
  });

  it('Displays update form when update button is clicked', () => {
    cy.get('.update-button').first().click();
    cy.get('.update-form-wrapper').should('be.visible');
  });

  it('Deletes a note when delete button is clicked', () => {
    cy.get('.note-card').then(($notes) => {
      const initialCount = $notes.length;
      cy.get('.delete-button').first().click();
      cy.get('.note-card').should('have.length', initialCount - 1);
    });
  });
});

   */
