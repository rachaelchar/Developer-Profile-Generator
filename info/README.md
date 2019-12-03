# Developer-Profile-Generator
A command-line application that dynamically generates a PDF profile from a GitHub username.

## Description
This application was created to allow the user to quickly create a easy-to-read, attractive snapshot of
a developer based on their GitHub profile. 

### User Story
AS A product manager
I WANT a developer profile generator
SO THAT I can easily prepare reports for stakeholders

## To Run:
1. Install dependencies
2. Run "node index.js" in the command line
3. Enter a GitHub username when prompted
4. Select a color to customize the them of the generated resume
5. The resume will open automatically upon creation

## Demo
![Example PDF](/info/demo.gif)

## Example PDF
![Example PDF](/info/example-pdf.png)

### API's Referenced
* GitHub API

### Dependencies
* axios: ^0.19.0
* html-pdf: ^2.2.0
* inquirer: ^7.0.0
* open: ^7.0.0




