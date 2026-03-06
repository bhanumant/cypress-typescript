describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    console.log('hi');
  });

  it('passes', () => {
    const name = 'Hanumant'; // unused variable
    cy.visit('https://example.cypress.io');
  });
});
