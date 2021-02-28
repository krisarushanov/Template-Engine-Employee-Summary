// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.validateString(school, "school");
        this.school = school;
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
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
    static getPrompts() {
        return[
            {
                type: "input",
                message: "What is your name(Intern)?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is your ID(intern)?",
                name: "internID"    
            },
            {
                type: "input",
                message: "What is your email(intern)?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is your School(intern)?",
                name: "internSchool"
            }
        ];
}
}
module.exports = Intern;