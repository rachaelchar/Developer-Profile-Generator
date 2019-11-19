const inquirer = require("inquirer");
const axios = require("axios");
// const util = require("util");
const fs = require("fs");


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
  .then(function(answers) {
    console.log(answers);
  })
  .then(function(username) {
    const url = `https://api.github.com/users/${username}`;

    axios.get(url).then(function (response) {
        console.log(response.data);
    })


  })
  .catch(function(err) {
    console.log(err);
  });






//         fs.writeFile("portfolio.html", function (err) {
//             if (err) {
//                 throw err;
//             }
//         })
//     });
// });




// function writeToFile(fileName, data) {

// }

// function init() {}

// init();
