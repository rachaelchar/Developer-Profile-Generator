const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateHTML = require("./generateHTML.js");
const pdf = require('html-pdf');
const open = require('open');

function promptUser() {
  return inquirer
    .prompt([{
      type: "input",
      name: "username",
      message: "What is your Github username?"
    },
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ["green", "blue", "pink", "red"]
    },
    ]);
}

promptUser()
  .then(function (answers) {
    return answers;
  })
  .then(function (answers) {
    const { username } = answers;
    const url = `https://api.github.com/users/${username}`;

    const { color } = answers;

    axios.get(url).then(function (response) {

      const data = {
        color: color,
        ...response.data
      }


      const html = generateHTML(data);

      return writeToFile(html); 

    });

    return answers;
  })
  .catch(function (err) {
    console.log("catch", err);
  });



function writeToFile(html){

  const options = { 
    zoomFactor: .75
   };
 
  pdf.create(html, options).toFile('./profile.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res);
    
    open("profile.pdf");
    console.log("Success!");
  });

};




