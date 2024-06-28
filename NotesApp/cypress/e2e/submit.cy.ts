describe('Notes Form Submission', () => {
    beforeEach(() => {
      cy.visit('/newnote');
    });
    it('Submits the form after filling out required fields', () => {
        cy.get('input[formControlName="title"]').type('Test Note Title');
        cy.get('input[formControlName="note"]').type('This is a test note content.');

        cy.get('form').submit();

      });
  });
  