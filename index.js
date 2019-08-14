#!/usr/bin/env node
var readlineSync = require('readline-sync');
var validator = require("email-validator");
const axios = require('axios');

// --------------------

// Wait for user's response.
var emailAdress = readlineSync.question('May I have your emailAdress? ');
var emailToValidate = emailAdress;

if(validator.validate(emailToValidate) === true){
    var correctEmailText = `${emailToValidate} is a valid format`;
    console.log(correctEmailText);

}
var untranslatedText = readlineSync.question('Type the message you would like to translate (en --> it)');
var stringToTranslate = untranslatedText;


function translateText(){
    console.log(stringToTranslate);
axios.get(`https://api.mymemory.translated.net/get?q=${stringToTranslate}&langpair=en|it`)
  .then(function (response) {
      //console.log(response);
    nodeOutput(response.data.responseData.translatedText);
  });
}
translateText();

  function nodeOutput(output){
      console.log(`${stringToTranslate} translated in English is ${output}`);
  }
