/**
 * api test using cy.request features
 */
describe('API Tests', () => {
  const baseUrl = 'https://www.cntraveler.com/?us_site=y&format=json'

  it('should return a random fact', () => {

    const brandName = 'Condé Nast Traveler'
    
    // validate brand name
    cy.request(`${baseUrl}`)
      .its('body')
      .then((response) => {
        expect(response.brandName).to.equal(brandName)
      })
  })
})
