// 1. Use first names, last names, and the number of years worked as values in the constructor.
// 2. Create two or more people with values for their first names, last names, and the number of years they've worked at the company. Add the people into an array.
// 3. Set up a prototype to return the details of the person's first and last names and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding some text to make the output a full sentence.

class Employee {
    #firstname
    #lastname
    #yearsWorked

    constructor(firstname, lastname, yearsWorked){
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#yearsWorked = yearsWorked;
    }
    
    get firstname(){
        return this.#firstname;
    }

    set firstname(firstname){
        this.#firstname = firstname;
    }

    get lastname(){
        return this.#lastname;
    }

    set lastname(lastname){
        this.#lastname = lastname;
    }

    get yearsWorked(){
        return this.#yearsWorked;
    }

    set yearsWorked(yearsWorked){
        this.#yearsWorked = yearsWorked;
    }
}

emp1 = new Employee("Gage", "Alan", 1);
emp2 = new Employee("Jimmy", "Butler", 5);

employees = [emp1, emp2];

Employee.prototype.profile = function(){
    return `${this.firstname} ${this.lastname} has worked for ${this.yearsWorked}`
};

employees.forEach(emp => {
    console.log(emp1.firstname);
    console.log(emp.profile());
});