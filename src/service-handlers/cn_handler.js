'use strict';
const axios = require('axios');

const headers = {
  'content-type': 'application/json',
};

const apiTraveler = 'https://www.cntraveler.com/?us_site=y&format=json';

export default class ps_handler {

  /**
    * retrieveMethod api
    */
  async retrieveMethod() {

    let response;
    try {
      response = await axios.get(apiTraveler, { headers: headers });
      console.log('Response: ' + JSON.stringify(response.data));
      return response.data;
    } catch (e) {
      console.log('Error: ' + JSON.stringify(e.response.data));
    }
    return response;
  }

}