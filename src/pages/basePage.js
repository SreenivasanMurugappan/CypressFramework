export default class basePage {

  baseUrl = 'https://www.cntraveler.com/?us_site=y'
  /**
  * visit so we can use relative urls and append them to baseUrl
  * @param {string} path
  */
  navigate(path) {
    cy
      .visit(this.baseUrl + path)
  }

  /**
  * return page title
  */
  getPageTitle() {
    return cy.title()
  }

  /**
  * read text from ui
  */
  readTextUsingLocators(elementName) {
    cy.get(elementName)
      .then((element) => {
        cy.log('text: ' + element.text());
      });
  }
}