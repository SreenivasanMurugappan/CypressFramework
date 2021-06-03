import basePage from './basePage.js'

export default class homePage extends basePage {

    constructor() {
        super()
    }

    // locators
    condeNastBtn = '[data-testid=Logo] > .responsive-asset > .sc-iJCRrE > .responsive-image__image';
    searchBtn = '.fgYlhU > .sc-jSFjdj > .icon';
    searchInputBtn = '#local-search-input-field';

    /**
    * go to home
    */
    gotoHome() {
        const button = cy.get(this.condeNastBtn);
        button.click();
    }

    /**
    * search
    * @param {string} text
    */
    search(text) {
        let searchBox = cy.get(this.searchBtn);
        searchBox.click();
        cy.get(this.searchInputBtn).type(text);
    }
}
