import basePage from './basePage.js'

export default class travelerPage extends basePage {

    constructor() {
        super()
    }

    // locators
    contentHeaderHed = '[data-testid=ContentHeaderHed]';

    /**
    * click using text
    * @param {string} text
    */
    clickUsingContains(text) {
        cy.contains(text).click();
    }

    validations(text) {

        cy.contains(text).should('be.visible');
    }

    /**
    * readContentHeaderHed
    * @param {string} text
    */
    readContentHeaderHed() {
        this.readTextUsingLocators(this.contentHeaderHed);
    }
}
