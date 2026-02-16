export class Student {
     firstname : string ;
     lastname : string ;
    constructor(firstname = '', lastname = '') {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    
    printName() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}
