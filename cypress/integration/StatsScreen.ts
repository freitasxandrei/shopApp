describe('StatsScreen', () => {
  it('loads Categorias', () => {
    cy.visit('/')

    cy.contains('Categorias').click()

    cy.contains('Categorias')

    cy.contains('Sequências')
    cy.contains('0 dias')

    cy.contains('Total')
    cy.contains('0 sessões')

    cy.contains('Tempo total')
    cy.contains('0 minutos')
  })
})
