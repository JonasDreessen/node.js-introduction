var validator = require("email-validator");
var stringToTranslate = "I Love Pizza";
const axios = require('axios');
var emailToValidate = "Jonas-Dreessen@outlook.com"


if(validator.validate(emailToValidate) === true){
    var correctEmailText = `${emailToValidate} is a valid format`;
    console.log(correctEmailText);
    translateText();
}


function translateText(){

axios.get(`https://api.mymemory.translated.net/get?q=${stringToTranslate}&langpair=en|it`)
  .then(function (response) {
    nodeOutput(response.data.responseData.translatedText);
  });
}

  function nodeOutput(output){
      console.log(`${stringToTranslate} translated in English is ${output}`);
  }
