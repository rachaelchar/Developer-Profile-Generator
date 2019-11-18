const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

const questions = [];

inquirer
    .prompt([{
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices:["green", "blue", "pink", "red"]
    },
    ])
    .then(function ({username}){
        const url = `https://api.github.com/users/${username}`;

        axios.get(url).then(function(response) {
            console.log(response.data);
        });
        
    });




// function writeToFile(fileName, data) {
 
// }

// function init() {}

// init();
