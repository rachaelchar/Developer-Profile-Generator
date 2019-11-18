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
        choices:["red", "blue", "green", "yellow"]
    },

    ])
    .then(function (answers){
        console.log(answers);
    }
    );

let url = `https://api.github.com/users/${username}`

function writeToFile(fileName, data) {
 
}

function init() {}

init();
