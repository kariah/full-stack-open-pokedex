describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Ivysaur', function() {
  it('ivysaur page can be opened', function() {
    cy.visit('./pokemon/ivysaur')
    cy.wait(500)
    cy.contains('ivysaur')
    cy.contains('Previous')
    cy.contains('Next')
  })
})