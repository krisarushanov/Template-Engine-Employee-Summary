const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {render, save} = require("./lib/htmlRenderer");
const { mainModule } = require("process");


var employees = [];

main();

async function main() {
    console.log("Build Team");
    var answers = await inquirer.prompt(Manager.getPrompts());
    let manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice
    );
    employees.push(manager);
    await getNextEmployee();
    var html = render(employees);
    save(html);
    console.log("finished");
}

async function getNextEmployee() {
    let nextEmployeePrompt =
    [{
        type: "list",
        message: "Which team member would you like to add?",
        name: "add",
        choices: ["Engineer", "Intern", "none"],

    }];

    console.log("prompt for next employee addition.");
    var answers = await inquirer.prompt(nextEmployeePrompt);
    if (answers.addTeammate.toLowerCase() == "engineer") {
        let answers= await inquirer.prompt(Engineer.getPrompts());
        let e = newEngineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
        );
        employees.push(e);
        await getNextEmployee();
    }
    if (answers.addTeammate.toLowerCase() == "intern") {
        let answers= await inquirer.prompt(Intern.getPrompts());
        let i = newIntern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internGithub
        );
        employees.push(i);
        await getNextEmployee();
    }

    render(employees)
}
module.exports = employees;