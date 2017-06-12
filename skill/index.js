const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.232023d3-48f5-46f3-95cf-26acaef12546';

const SKILL_NAME = "Monica and Adam's Wedding";
const GET_FACT_MESSAGE = "Fact: ";
const HELP_MESSAGE = "You can say tell me a fact about Monica or Adam, ask for a list of facts, or, you can say stop to exit... What can I help you with?";
const FACT_TRAILER = 'Ask for another fact or say stop to exit.'
const HELP_REPROMPT = "Ask for a fact or say stop to exit.";
const STOP_MESSAGE = "Goodbye and Mazal Tov to you all!!";
const THATS_ALL_MESSAGE = 'That is all of the interesting information that I currently have. Thanks for listening and come back soon. Have a wonderful day.';

const data = {
  "adam": [
    "Adam, along with a cadre of young dynamic filmmakers and actors, participated in filming the Halloween cult classic “Debra's Bones”.  It was shot at Lord Noah Gardy's Southampton home, and he tired of our antics within 15 minutes.",
    "Adam can drop the accent whenever he damn well pleases. All of his friends have seen him do it.",
    "Adam one time came within an inch of crashing his car and killing us because he was too distracted by the Red Lobster Cheddar Bay Biscuits he and his friend Nick had just picked up.",
    "Adam once sat under a tree in an NYC park and a bird shat on his head not once, not twice, but THREE times. Monica refused to touch him shortly after.",
    "There is nothing Adam hates more than the song Africa by Toto.", 
    "Adam was so constipated for nearly a week that he changed his diet entirely to prunes...needless to say, there followed a memorable day at the office later that week.",
    "Adam briefly turned Catholic for a few days because he was forced by Dom to play a religious character in one of Dom's films.",
    "The greatest mystery of Adam is that he loves to pee outside any chance he gets.",
    "Adam once almost got into a bar fight with a bunch of 40-year-old men because he felt they were being disrespectful to a woman. She ended up being the dude's ex wife.",
    "Adam has a tattoo of his favorite camera lens. Ask him about it, he will LOVE to explain it to you.",
    "Adam faked a neck injury for an entire year in High School to get out of Gym class.",
    "Adam went goth for a month because black is slimming. ",
    "In high school, Adam used to beg for quarters just to buy a bowl of rice from Tea Garden.",
    "Adam won a prize for being a beautiful baby and smiling angelically.",
    "Monica once knocked out Adam on a dare.",
    "Adam wanted to be Jack Black so badly in middle school and High School that he dressed like him and lived by the Tenacious D album.",
    "We used to call Adam 'lunchbox' because he was obsessed with Kevin Smith.", 
    "Adam had spiked hair, a mohawk, and green hair in middle school.",
    "While Adam was at High School, he also wore black goth pants with massive chains on it.",
    "Up until high school, Adam didn't have a British accent, then when it became cool it magically came back.",
    "Adam's middle name is Nathan - named after his great grandfather Nat.",
    "Adam was once a proud Junior Hornet who attended every Watford FC Saturday soccer game. He was born in the hospital next door to Vicarage Road, the sacred home of Watford FC.",
    "Adam wanted to enroll at West Point to become a Power Ranger.",
    "When Adam was 5 years old he decided to rescind his membership of the Peter Pan Society and concentrated instead on becoming Tommy the Green Power Ranger. He practiced his Ninja moves on unfortunate elderly ladies at the supermarket.",
    "Adam’s clothes always used to magically fall off when he ate ice cream. His mum never wanted to do the clothes washing so it was just easier to make him take his clothes off when he ate an ice cream bar.",
    "Monica used to chase and bully Adam (with help and permission from his cousin Emma) when they were in the third grade. They threw his hat into the “witch’s” garden and made Adam cry!",
    "Adam’s first superhero was 'Pilla the Caterpillar', a story he forced his nana to make up and tell him.",
    "Adam used to leave lethal pointy things on the bedroom floor so that when he had a bad dream and you ran into the room in the dark you would step on them and get a bleeding foot.",
    "Career choices. Before becoming a cinematographer, Adam wanted to be a doctor of snatches.",
    "It’s Adam's fault that he had twin siblings! When his mother and father asked him if he wanted a brother or sister he said both, and he wanted to call them Jack and Jill.",
    "Adam drew pictures at school of all the Volerich family secrets - like the time that Jack pooped in the tub.",
    "Adam's first fries were from McDonalds in the Harlequin Center Watford. His eyes went up into his head and from then on he decided only junk food was to be eaten.",
    "Adam was awarded the prestigious Northwood Preparatory School Monitors Award for his tenure as a junior school monitor during the period April to July 1998."
  ],
  "monica": [
    "Monica's favorite movie is Titanic. She will cry if you play 'My Heart Will Go On'.",
    "Monica's favorite band is Queen.",
    "Monica has three tattoos.", 
    "Monica and Dani, her new mother-in-law, share a birthday.",
    "Monica was once early 2000's rap sensation Eminem’s biggest fan",
    "Monica once ordered a very bad prime rib at a Denny’s and ate it anyway.",
    "Monica has sobbed on a train while thinking of songs to play at funerals, an activity that was meant to pass the time but then took a very dark turn.",
    "Monica once cried because her maid of honor could not give her a satisfactory answer to the question, 'Where does the stuff in the kitchen sink go when it goes down the drain?'",
    "Monica's mom, Tassana, first discovered monica was OCD when she would keep tying her shoelaces till both loops and both tails were even and perfectly symmetrical.  This could take forever. ", 
    "Monica realized that she was destined to save the world when the movie 'The Land Before Time' inspired her to save the dinosaurs. Then 'Free Willy' had her saving the whales.  Yale got her to want to save the humans  and upon graduation awarded her their 'most likely to end world hunger' prize. ",
    "Monica's first failure was when she got rejected from Elizabeth Morrow kindergarten.  While awaiting her interview, she started building a zoo.  When it was her turn to be interviewed, she said 'No I'm not ready yet!'  She was not done building her zoo.  They knew instantly she would be a difficult student!  Rumors also abounded about her dancing on the table during the interview.  Overly exuberant? ", 
    "Monica was kicked out of her ballet class!  She would narrate a story while dancing.  When told ballet was not a verbal activity, she started making sound effects instead.  Needless to say, that did not go over very well. ", 
    "One time when Aaron threw a party at the house while his parents were out, a friend rushed in to warn him about a imminent threat.  Aaron asked, 'Are the cops coming?'  His friend replied, 'No, it's worse. It's your sister!!!!'",  
    "Monica once picked out a crazy cat for Grandma and named her Glitter.  Glitter attacked all grandma's grandkidsand had to be locked up whenever they visited!! ", 
    "Monica was reprimanded in kindergarten for yawning really loudly.  Her response was:  'but my daddy does it all the time?!'",
    "It's tough for Monica being first all the time.  At a friend's birthday party, she had a full blown brat attack because she did not get the first piece of cake.  Ok, they were toddlers, but it was still very embarrassing!!",

"The most amazing moment of Monica's career as a track star was when she anchored a relay race and got the baton in last place.  She preceded to pass every single girl in front of her and won the race!  Afterwards she could not walk for months, but that's another story.",  
"It was a very harrowing moment when she called from far western Nepal to tell her family that there had been an earthquake.  It took her a whole week to get home!  Her mom reminded her once again that there's no sense in being a martyr and that she'd accomplish more alive.  ",
"Monica was always the adult in the family.  When her dad would throw food at the dinner table to start a food fight, she would stomp off all mad. ", 
"Monica's most annoying habit is when her thoughts get stuck in a loop and she needs to replay the same idea over and over again.  Nobody is sure why that happens. ",
"Monica's mom, Tassana, used to dress Monica every day and always thought that she looked cute!  One day she decided that her Mom didn't know how to dress her and Monica rebelled with a vengeance!!  Of course, it had to be Coach, Luis Vuitton, other other expensive name brands - plus hair straightening."  ,
    "Monica always needs to buy food in two’s. In the early years at Possible, she would go to Haven’s Kitchen where she would have to get two muffins. At Pret a Mangé, she would get two soups. And on it goes...",

    "Monica takes about five minutes to wash her hands.",

    "Monica owns  74 pairs of Toms shoes.",

    "When Monica came back from a really long stint in Nepal, she wanted to really feel like a normal person again. So she started getting manicures/pedicures, bought a Tory Burch bag and wallet, and started wearing all of these fancy skirts. She also wore heels quite often (which, of course, were also Toms).",

    "Monica doesn't know how to type. She types with three fingers and it's always very, very loud.",

    "Monica claims she hates technology and social media, and yet she is really good at tagging friends in Facebook photos. My favorite posts are when she goes out to dinner with someone; she always takes a picture of each person at the table with their food or drink.",

    "Monica didn't go to the gym for about 6 months only because she had to buy a new pair of sneakers. (Guess you can't wear Toms).",

    "Monica broke her foot in Doha tripping on a curb and then refused to use crutches or a cane. Surprisingly, when she returned to the States and saw another doctor, her fracture hadn't healed at all. ",

    "When Monica lived in Doha, which was HOT, HUMID, and MORE HOT, Monica ate HOT pasta every day for lunch for a month.",

    "The first night Monica arrived at her beach hotel in Doha, Monica said 'This is where I'm going to have my honeymoon.'",

    "The last seven books Monica has probably read were about work and management. ",

    "Monica used to work for Two Degrees, an incredibly successful granola bar company that gave a portion of its proceeds to charity.",

    "Nobody has ever seen Monica or Adam cook once. Ever!",

    "Monica and her friend Laura, almost fell off a roof in Nepal doing karaoke to Lady Gaga's \"I'm on the edge.\"" 
  ]
};

exports.handler = function(event, context, callback) {
  let alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(newSessionHandlers, handlers);
  alexa.execute();
};

const readFact = function(who, context) {
    if (who !== 'adam' && who !== 'monica') {
      const speechOutput = HELP_MESSAGE;
      const reprompt = HELP_REPROMPT;
      context.emit(':ask', "Sorry, I didn't get that. " + HELP_MESSAGE, reprompt);
    } else {
      console.log('totalCount', context.attributes['totalFactCount']);
      const played = context.attributes['factsPlayed'] || [];
      if (played.length === context.attributes['totalFactCount']) {
        context.emit(':tell', THATS_ALL_MESSAGE);
      } else {
        const factArr = data[who];
        console.log('Played:', played);
        const length = factArr.length;
        let randomFact = '';
        do {
          const factIndex = Math.floor(Math.random() * length);
          randomFact = factArr[factIndex];
        } while (played.indexOf(randomFact) >= 0);
        context.attributes['factsPlayed'].push(randomFact);
        console.log("Fact: ", randomFact);
        const speechOutput = GET_FACT_MESSAGE + randomFact + '  ' + FACT_TRAILER;
        context.emit(':askWithCard', speechOutput, HELP_MESSAGE, SKILL_NAME, randomFact);
      }
    }
}

const newSessionHandlers = {
  'NewSession' : function() {
    if (Object.keys(this.attributes).length === 0) {
      this.attributes['factsPlayed'] = [];
      this.attributes['totalFactCount'] = data['monica'].length + data['adam'].length;
    }
    const speechOutput = "Welcome to Monica and Adam's Wonderful Wedding Celebration. " + HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  }
};

const handlers = {
  'LaunchRequest': function () {
    const speechOutput = "Welcome to Monica and Adam's Wedding Celebration. " + HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', speechOutput, reprompt);
  },
  'ListFactsIntent': function() {
    console.log(this.event.request.intent.slots);
    const numberSpoken = this.event.request.intent.slots.number.value;
    let number = Number.parseInt(numberSpoken);
    if (!number || number <= 0) {
      number = 3
    }
    const factArr = data['adam'].concat(data['monica']);
    const length = factArr.length;
    const factsToGo = [];
    do {
      let randomFact = '';
      do {
        const factIndex = Math.floor(Math.random() * length);
        randomFact = factArr[factIndex];
      } while (factsToGo.indexOf(randomFact) >= 0);
      factsToGo.push(randomFact);
    } while (factsToGo.length < number);
    speechOutput = 'Here is your list of ' + number + ' facts about Monica and Adam: ';
    factsToGo.map(fact => {
      speechOutput += "Fact: " + fact + '  ';
    })
    this.emit(':tell', speechOutput);
  },
  'PersonFactIntent': function () {
    const who = this.event.request.intent.slots.who.value.toLowerCase();
    readFact(who, this);
  },
  'NewFactIntent': function () {
    const whoArr = ['adam', 'monica'];
    const whoIndex = Math.floor(Math.random() * whoArr.length);
    const randomWho = whoArr[whoIndex];
    readFact(randomWho, this);
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
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;
    this.emit(':ask', "Sorry, I didn't get that. ", reprompt);
  }
};

