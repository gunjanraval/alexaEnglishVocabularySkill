/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.b521845e-0e34-4ef6-bc1c-daad7408ff42';

const SKILL_NAME = 'English Vocab';
const GET_FACT_MESSAGE = "The word of the day is ";
const GET_SPELL_MESSAGE="Spell the word ";
const HELP_MESSAGE = 'You can say tell me a new word, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
   'Exquisite, it is spelled as E, X, Q, U, I, S, I, T, E, it means something extremely beautiful and delicate.',
   'Weird, it is spelled as W, E, I R, D, it means something very strange and unusual, unexpected, or not natural.',
   'Accomodate, it is spelled as A, C, C, O, M, O, D, A, T, E, it means Something that meets a need; a convenience.',
   'Handkerchief, it is spelled as H,A,N,D,K,E,R,C,H,I,E,F, it is a square of cotton or other finely woven material intended for wiping one\'s nose.',
   'Indict, it is spelled as I,N,D,I,C,T, it means to formally accuse of or charge with a crime.',
   'Cemetary, it is spelled as C,E,M,E,T,A,R,Y, it is a large burial ground, especially one not in a churchyard.',
   'Conscience, it is spelled as C,O,N,S,C,I,E,N,C,E, it means a person\'s moral sense of right and wrong, viewed as acting as a guide to one\'s behaviour. ',
   'Rhythm, it is spelled as R,H,Y,T,H,M, it means a strong, regular repeated pattern of movement or sound.',
   'Playwright, it is spelled as P,L,A,Y,W,R,I,G,H,T, it\'s a person who writes plays.',
   'Liaison it is spelled as L,I,A,I,S,O,N, it means a communication or cooperation which facilitates a close working relationship between people or organizations.',
   'Histology it is spelled as H ,I ,S ,T ,O ,L ,O ,G ,Y it is the study of tissues of organisms',
   'Pomegranate it is spelled as P ,O ,M ,E ,G ,R ,A ,N ,A ,T ,E it is a shrub or small tree having large red many-seeded fruit.',
   'Effervescence it is spelled as E ,F ,F ,E ,R ,V ,E ,S ,C ,E ,N ,C ,E it is the process of bubbling as gas escapes'
];

const spellData = [
    'frippery',
'revises',
'abbreviate',
'stalls',
'rigid',
'quizzed',
'regressing',
'marries',
'trend',
'neat',
'straightening',
'drops',
'sundries',
'discredits',
'pine',
'receive',
'bathers',
'diplomacy',
'ascent',
'dilettante',
'surveillance',
'waved',
'characterizations',
'snaky',
'mangers',
'omelette',
'entreaty',
'tunnel',
'completion',
'similarly',
'murals',
'tedium',
'alongside',
'elides',
'openly',
'diagnoses',
'tumid',
'insects',
'chaplains',
'receivers',
'blemishes',
'steam',
'jokers',
'offhand',
'retirement',
'invigorate',
'pompously',
'counted',
'favorably',
'forces',
'pledges',
'definitions',
'swoop',
'slay',
'cornerstone',
'interweave',
'specialists',
'candied',
'cupidity',
'stultify',
'straits',
'diarrhea',
'angels',
'malingers',
'untangle',
'executed',
'alluded',
'manipulated',
'overpowered',
'lawmakers',
'jaundice',
'justice',
'beseeching',
'embroiders',
'legislated',
'weird',
'warn',
'abrupt',
'echo',
'summers',
'assign',
'outwardly',
'sailing',
'donating',
'hooked',
'crops',
'sunk',
'innocuous',
'infatuation',
'lessens',
'countless',
'strictness',
'paraphernalia',
'prone',
'worshiped',
'astronomical',
'ravens',
'wasted',
'legalized',
'filmed'
    ]



        

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

var factIndex;

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewWordIntent');
    },
    
    'GetNewWordIntent': function () {
                
        var factArr = data;
        factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },



    'askSpellingIntent': function () {
                
        var factArr = spellData;
        factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_SPELL_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput).listen();
        this.emit(':responseReady');
    },


    'spellCheck': function () {
        var factArr = spellData;
        var word = factArr[factIndex];
        const userResponse = this.event.request.intent.slots.spelling.value;
        var strin = "";
        var i=0;
        for(i in word){
            strin +=word[i]+"."
        }
        
        if(strin==userResponse){
            this.response.speak("Well Done!");    
        }
        else{
            this.response.speak("Try Again").listen();
        }
        this.emit(':responseReady');
    },

    'dontKnowIntent': function () {
        var factArr = spellData;
        var word = factArr[factIndex];
        var strin = "";
        var i=0;
        for(i in word){
            strin +=word[i]+","
        }
        var alexaResponse = "The correct spelling of "+word+" is "+strin;
          
        this.response.speak(alexaResponse);    
        this.emit(':responseReady');
    },

    'spellTheWordIntent': function () {
        var word = this.event.request.intent.slots.wordslot.value;
        var strin = "";
        var i=0;
        for(i in word){
            strin +=word[i]+","
        }
        var alexaResponse = "The word "+word+" is spelled as "+strin;
          
        this.response.speak(alexaResponse);    
        this.emit(':responseReady');
    },


    


    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
