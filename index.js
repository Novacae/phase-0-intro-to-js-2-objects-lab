// Write your solution in this file!
let employee = {
    streetAddress: "collins",
    name: "Sam",
}
function updateEmployeeWithKeyAndValue() {
    let newEmployee = {...employee};
    newEmployee["streetAddress"]="11 Broadway";
    return newEmployee;
}
 
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee["streetAddress"]="12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey() {
 let newPloyee = {...employee};
 newPloyee["name"]=undefined;
 return newPloyee;
}

function destructivelyDeleteFromEmployeeByKey() {
    let newLoyee = employee;
    newLoyee["name"] = undefined;
    return newLoyee;
}