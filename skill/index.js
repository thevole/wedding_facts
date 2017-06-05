const Alexa = require('alexa-sdk');
const Rx = require('rxjs/Rx');

const APP_ID = 'amzn1.ask.skill.232023d3-48f5-46f3-95cf-26acaef12546';

const SKILL_NAME = "Monica and Adam's Wedding";
const GET_FACT_MESSAGE = "Fact: ";
const GET_FACT_LIST_MESSAGE = "Here is a list of facts about Monica and Adam: ";
const HELP_MESSAGE = "You can say tell me a fact about Monica or Adam, or, you can say stop to exit... What can I help you with?";
const FACT_TRAILER = 'Ask for another fact.'
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye and Mazal Tov!!";

const data = {
  "adam": [
    "Adam won a prize for being a beautiful baby.",
    "Adam's middle name is Nathan - named after his great grandfather Nat.",
    "Adam wanted to enroll at West Point to become a Power Ranger.",
    "When Adam was 5 years old he decided to rescind his membership of the Peter Pan Society and concentrated instead on becoming Tommy the Green Power Ranger. He practiced his Ninja moves on unfortunate elderly ladies at the supermarket.",
    "Adam’s clothes always used to magically fall off when he ate ice cream.",
    "Monica used to chase and bully Adam (with help and permission from his cousin Emma) when they were in the third grade. They threw his hat into the “witch’s” garden and made Adam cry!",
    "Adam’s first superhero was 'Pilla the Caterpillar', a story he forced his nana to make up and tell him.",
    "Adam used to leave lethal pointy things on the bedroom floor so that when he had a bad dream and you ran into the room in the dark you would step on them and get a bleeding foot.",
    "Career choices. Before becoming a videographer, Adam wanted to be a snatch doctor.",
    "It’s Adam's fault that he had twin siblings! When his mother and father asked him if he wanted a brother or sister he said both, and he wanted to call them Jack and Jill.",
    "Adam drew pictures at school of all the Volerich family secrets - like the time that Jack pooped in the tub.",
    "Adam's first fries were from McDonalds in the Harlequin Center Watford. His eyes went up into his head and from then on he decided only junk food was to be eaten.",
    "Adam was awarded the prestigious Northwood Preparatory School Monitors Award for his tenure as a junior school monitor during the period April to July 1998."
  ],
  "monica": [
    "Monica and Dani, her new mother-in-law, share a birthday.",
  ]
};

exports.handler = function(event, context, callback) {
  let alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function () {
    const speechOutput = "Welcome to Monica and Adam's Wedding Celebration. " + HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'GetNewFactPersonIntent': function () {
    console.log(this);
    const who = this.event.request.intent.slots.who.value;
    this.emit(':tell', "Here is a person fact about " + who + '.');
  },
  'ListFactsIntent': function () {
    const factArr = data['monica'].concat(data['adam']);
    let speechOutput = GET_FACT_LIST_MESSAGE;
    let facts = '';
    for (let i = 0; i < factArr.length; i++) {
      const fact = factArr[i];
      facts += fact + ' ';
      speechOutput += GET_FACT_MESSAGE + fact + " ";
    }
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, facts)
  },
  'NewFactIntent': function () {
    const factArr = data['adam'].concat(data['monica']);
    console.log('factArr: ', factArr, factArr.length);
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;
    this.emit(':askWithCard', speechOutput, HELP_MESSAGE, SKILL_NAME, randomFact)
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', STOP_MESSAGE);
  },
  'Unhandled': function() {
    this.emit(':ask', 'Sorry, I didn\'t get that. ' + HELP_MESSAGE, HELP_REPROMPT);
  }
};

