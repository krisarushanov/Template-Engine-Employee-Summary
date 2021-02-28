// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.validateString(officeNumber, "officeNumber");
        this.officeNumber = officeNumber;
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
        return 'Manager';
    }
    getOfficeNumber() {
        return this.school;
    }
    static getPrompts() {
        return[
            {
                type: "input",
                message: "What is your manager's name?",
                name: "ManagerName"
            },
            {
                type: "input",
                message: "What is your manager's ID?",
                name: "ManagerID"    
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "ManagerEmail"
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "ManagerofficeNumber"
            }
        ];
}
}
module.exports = Manager;