var employeeDetails = [
    {
        name: "Sanchit J.",
        email_id: 'sanchit@gmail.com',
        emp_id: 'A454657AFS9',
        salary: '70000',
        dept: "A",
        active: '1',
    },
    {
        name: "Saad A.",
        email_id: 'saad@gmail.com',
        emp_id: 'A464GHJ5VS9',
        salary: '80000',
        dept: "B",
        active: '1',
    },
    {
        name: "Amrit S.",
        email_id: 'amrit@gmail.com',
        emp_id: 'A4542990BQS',
        salary: '57000',
        dept: "C",
        active: '0',
    },
    {
        name: "Sumit C.",
        email_id: 'sumit@gmail.com',
        emp_id: 'SSC4T57AFS9',
        salary: '150000',
        dept: "C",
        active: '1',
    },
    {
        name: "Chandra V.",
        email_id: 'chandra@gmail.com',
        emp_id: 'A2856NNHFS9',
        salary: '20000',
        dept: "B",
        active: '0',
    }
];



//Expense of departments//
//Get employee details by ID (use function)//

//List all currenty available employees//
for(var i=0; i < employeeDetails.length; i++){
    console.log(employeeDetails[i].name);
}

//List all unique departments//
var uniqueDepts = [];

employeeDetails.forEach( function(value) {
    var notUnique = uniqueDepts.includes(value.dept);
    if(!notUnique){
        uniqueDepts.push(value.dept);
    }
});

console.log(uniqueDepts);

var deptname = [];
var deptsalary = [];
var dd = {};
var sal = 0;
var ind = 0;
employeeDetails.forEach(function (value,index){
    if(!deptname.includes(value.dept)){
        deptname.push(value.dept);
        deptsalary.push(value.salary);
        dd[value.dept] = value.salary;
    }else{
        var ind = deptname.findIndex(j => j == value.dept);
        deptsalary[ind] + value.salary;
        dd[value.dept] = deptsalary[ind];
    }
});
console.log(dd);

employeeDetails.forEach(IDs);

function IDs(emp_id){
    console.log(emp_id);
}