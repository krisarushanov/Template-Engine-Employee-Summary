// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.validateString(github, "github");
        this.github = github;
    }
    getId() {
        return this.id
        }
    getName() { 
    return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
    static getPrompts() {
        return[
            {
                type: "input",
                message: "What is your name(engineer)?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is your ID(engineer)?",
                name: "engineerID"    
            },
            {
                type: "input",
                message: "What is your email(engineer)?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is your GitHub(engineer)?",
                name: "engineerGitHub"
            }
        ];
}
}
module.exports = Engineer;