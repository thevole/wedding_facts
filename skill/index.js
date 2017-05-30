'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = 'amzn1.ask.skill.1cc65a46-cbf1-485f-8285-c624a0f46669';

var SKILL_NAME = "Wedding Facts";
var GET_FACT_MESSAGE = "Here's your titbit about the happy couple: ";
var HELP_MESSAGE = "You can say tell me a wedding fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
  "Adam won a prize for being a beautiful baby.",
  "Adam's middle name is Nathan - named after his great grandfather Nat.",
  "Adam wanted to enroll at West Point to become a power ranger"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function () {
    this.emit('GetNewFactIntent');
  },
  'GetNewFactIntent': function () {
    var factArr = data;
    var factIndex = Math.floor(Math.random() * factArr.length);
    var randomFact = factArr[factIndex];
    var speechOutput = GET_FACT_MESSAGE + randomFact;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
  },
  'AMAZON.HelpIntent': function () {
    var speechOutput = HELP_MESSAGE;
    var reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  }
};
