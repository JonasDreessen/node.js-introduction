var validator = require("email-validator");
var emailParameter = "Jonas-Dreessen@outlook.com";
validator.validate(emailParameter);

console.log(validator.validate(emailParameter));
