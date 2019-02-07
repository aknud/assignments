let employees = [];

function Employee (name, jobTitle, salary, status="Full Time"){
    this.name = name,
    this.jobTitle = jobTitle,
    this.salary = salary,
    this.status = status,
    this.printEmployeeForm = function(){
        console.log(`Name: ${name}, Job Title: ${jobTitle}, Salary: ${salary}, Status: ${status}`)
    }
}

let employee1 = new Employee("Amy", "Software Engineer", "$80,000/year");
let employee2 = new Employee("Veronica", "Software Engineer", "100,000/year", "Contract");
let employee3 = new Employee("Lara", "Software Engineer", "80,000/year");

employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()
employees.push(employee1,employee2,employee3)
