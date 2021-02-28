// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.validateInt(id , "id");
        this.validateString(name, "name");
        this.validateString(email, "email");
        this.id = id;
        this.name = name;
        this.email = email;
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
    return 'Employee';
}
static getPrompts() {
    return[];
}
validateString(value, name) {
    if (typeof value !== "string") {
        throw new Error(name + 'must be a string');

    }
    if (value.length < 1) {
        throw new Error(name + 'must be filled in');
    }
}
validateInt(value, name) {
    if(value === undefined) {
        throw new Error(name + 'has to be an integer');
    }
    if(parseInt(value) === NaN) {
        throw new Error(name+ 'has to be an integer');
    }
}
}

module.exports = Employee;