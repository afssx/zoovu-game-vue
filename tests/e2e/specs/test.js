// https://docs.cypress.io/api/introduction/api.html

describe('Start Game View Test', () => {

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h3', 'Hello friend, tell me your name...')
  })

  it('Set username and continue', () => {
    cy.get('.v-input').type('Andres')
    cy.get('.v-btn').click()     
    cy.location().should((loc) => {
      expect(loc.hash).to.eq('#/game')
    })
    cy.contains('h3', 'Good luck, Andres!')
  })

  it('Start a game', () => {
    cy.window().then(win => {
      cy.get(`#1`) 
          .trigger('mousedown', { which: 1, force: true, view: win,})
          .trigger('mousemove', { which: 1, clientX: 300, clientY: 500, force: true })
          .trigger('mouseup'), {force: true, view: win,};
    })
  })
})
