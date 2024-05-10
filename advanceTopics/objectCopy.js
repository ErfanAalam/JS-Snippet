const _ = require('lodash')

//  deep copy and shallow copy


//this is exmample of shallow copy
// it means when we change in second object the first object is also changed because second stores the address of first object
// let developer1 = {
//     name:"Erfan"
// }

// let developer2 = developer1;
// developer2.name = "Divyansh"


// console.log(developer1);
// console.log(developer2);



//  deep copy example
// in this on change of second object the first object will not change

let developer1 = { name:"erfan",
    skills: {primary:"Full stack", secondary:"React js developer"},
    calculateAge : function (){
        return 19;
    },
    joiningdate: new Date()

}

// this is one method
// let developer2 = Object.assign({}, developer1)
// developer2.name  = "divyansh"


// second method is spread operartor
// in spraed operator the object into object will change on the both objects so this is not good method

// let developer2 = {...developer1}

// developer2.name  = "divyansh"
// developer2.skills.primary = "front end developer"


// method 3

// let developer2 = JSON.parse(JSON.stringify(developer1))
// developer2.name  = "divyansh"
// developer2.skills.primary = "front end developer"


// method 4 use the lodash library

let developer2 = _.cloneDeep(developer1)
developer2.name  = "divyansh"
developer2.skills.primary = "front end developer"

console.log(developer1);
console.log(developer2);