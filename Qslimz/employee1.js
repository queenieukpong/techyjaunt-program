const createEmployee = (name, role, salary) => {
    return { name, role, salary };
};

let Janet = createEmployee("Janet", "frontend dev", 2000);

const getSalary = (employee) => {
    return `The salary of ${employee.name} is ${employee.salary} per day`;
};

console.log(getSalary(Janet));

// CREATE A NEW FUNCTION THAT UPDATES EMPLOYEE SALARY

const updateSalary = (employee, newSalary) => {
    employee.salary = newSalary;
    return `Mrs, ${employee.name}'s new salary is now ${employee.salary} per month`;
}

console.log(updateSalary(Janet, 60000));
