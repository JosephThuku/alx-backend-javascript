export default function createEmployeesObject(departments, employees) {
    const employeesObject = {
        [departments]: employees,
    };
    
    return employeesObject;
    }