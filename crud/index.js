const fs = require("fs");

fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", (err, data) => {
    if(err){
        console.log(err);
    }
})

fs.readFile("employees.json", "utf8", (err, data) => {
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
})

fs.appendFile("employees.json", ',{"name": "Employee 2 Name", "salary": 3000}', (err)=> {
    if(err){
        console.log(err);
    }
})

fs.rm("employees.json", (err) => {
    if(err)console.log(err);
})