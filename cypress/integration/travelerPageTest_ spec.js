import TravelerPage from '../../src/pages/travelerPage';
import HomePage from '../../src/pages/homePage';
const CNHandler = require('../../src/service-handlers/cn_handler');
const travelerPage = new TravelerPage();
const homePage = new HomePage();

let dangerousHed;
let dangerousDek;
let contributors;

describe('Conde Nast', () => {
  beforeEach(() => {
  cy.log('------Test Method Started------');  
  })

  it('should launch the landing page', () => {
    travelerPage.navigate('');
    })

  it('should retrieve home page title', () => {
    travelerPage.getPageTitle();
  })

  it('api call by using axios', async function () {
    let cn_handler = new CNHandler(this);
    let response = await cn_handler.retrieveMethod();
    dangerousHed = response.bundle.containers[0].items[0].dangerousHed;
    dangerousDek = response.bundle.containers[0].items[0].dangerousDek;
    contributors = response.bundle.containers[0].items[0].contributors.author.items[0].name;

    cy.log('Article DangerousHed: ' + dangerousHed);
    cy.log('Article DangerousDek: ' + dangerousDek);
    cy.log('Article Contributors: ' + contributors);
  })

  it('assertion and validations ui', async function () {
    // navigate to article by clicking dangerousHed
    travelerPage.clickUsingContains(dangerousHed);

    // validate  dangerousHed in article page
    travelerPage.validations(dangerousHed);
    
    // validate  dangerousDek in article page
    travelerPage.validations(dangerousDek);
    
    // validate  contributors in article page
    travelerPage.validations(contributors);
    
    // readContentHeader from article page
    travelerPage.readContentHeaderHed();
  })

  it('search page', async function () {
    // search
    homePage.search('Washington');  

    // go to landingpage
    homePage.gotoHome();
  })
})
