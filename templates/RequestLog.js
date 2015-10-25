/**
* RequestLog.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	requestUrl: {
  		type: 'string'
  	},

  	requestMethod: {
  		type: 'string',
  		enum: ['POST', 'GET', 'PUT', 'DELETE']
  	},

  	requestHeaders: {
  		type: 'json'
  	},

  	requestBody: {
  		type: 'json'
  	}

  }
};

