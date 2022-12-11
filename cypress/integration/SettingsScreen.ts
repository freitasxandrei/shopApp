describe('SettingsScreen', () => {
  it('loads Sobre', () => {
    cy.visit('/')

    cy.contains('Sobre').click()

    cy.contains('Sobre')

    cy.contains('Restaurar dados')
  })

  it('', () => {
    cy.visit('/')

    cy.contains('Sobre').click()

    cy.get('[data-testid=headerBack]').click()

    cy.contains('Sobre')
  })
})
