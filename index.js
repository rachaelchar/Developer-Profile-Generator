const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const fs = require("fs");
const generateHTML = require("./generateHTML.js");


const questions = [];

// const writeFileAsync = util.promisify(fs.writeFile);

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
    console.log(answers);
    return answers;
  })
  .then(function (answers) {
    const { username } = answers;
    const url = `https://api.github.com/users/${username}`;

    const { color } = answers;

    axios.get(url).then(function (response) {
      // console.log(response.data);
      console.log(response.data);
      console.log(color);

      const data = {
        color: color,
        ...response.data
      }
      console.log(data);

      // const html = generateHTML(response.data);

      // return writeToFile("index.html", html); 

    });

    return answers;
  })
  .catch(function (err) {
    console.log("catch", err);
  });



function writeToFile(){

  if (err) throw err;

  console.log("Successfully wrote to index.html");
};




