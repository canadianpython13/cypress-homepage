
describe('Various element interactions on cypress homepage', () => {

  beforeEach(() => {
    cy.visit('https://www.cypress.io')
    cy.url().should('eq', 'https://www.cypress.io/')
  })
  
  it('users are able to see "Loved By" text as well as the weekly downloads number', () => {
    cy.get('h2').contains('Loved by OSS, trusted by Enterprise').scrollIntoView()
    cy.get('div').contains('5.0M+').should('be.visible')
  })

  it('user should be able to click on Company then on "About Cypress"', () => {
    cy.get('#dropdownCompany').click()
    cy.get('span:contains(About Cypress):first').click({ force: true })
    cy.url('https://www.cypress.io/about-us/')
  })

  it('user should be able to click on "Install" and then on "npm install cypress"', () => {
    cy.get('[data-cy=header-install]').click({ force: true })
    cy.get('[data-cy=modal-install-copy]', {timeout: 5000} )
      .should('be.visible')
      .focus()
      .click({ force: true })
    cy.window().then(win => 
      new Cypress.Promise((resolve, reject) =>
        win.navigator
          .clipboard.readText()
          .then(resolve)
          .catch(reject))
          ).should('eq', 'npm install cypress --save-dev')
  })

  it('should be able to click on Product and then visual reviews', () => {
    cy.get('#dropdownProduct').click()
    cy.get('span:contains(Visual Reviews)').click({ force: true })
    cy.url('https://www.cypress.io/cloud/#visual_reviews')
  })

  it('should be able to click on Product and then smart orchestration', () => {
    cy.get('#dropdownProduct').click()
    cy.get('span:contains(Smart Orchestration)').click({ force: true })
    cy.url('https://www.cypress.io/cloud/#smart_orchestration')
    cy.get('[href="#smart_orchestration"]:first').trigger('mouseover').should('have.attr', 'class', 
    'whitespace-nowrap rounded-full border px-[12px] py-[4px] text-[16px] leading-[24px] transition-colors border-jade-200 bg-white text-teal-600')
  })


})