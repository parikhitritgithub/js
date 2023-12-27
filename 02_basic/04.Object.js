// const tinderuser = new Object()//single turn object 
 const tinderuser = {} // non single turn object 

 tinderuser.id = "jdfbnkjf"
 tinderuser.name = "harry"
 tinderuser.isLoggrdIn = false 

console.log(tinderuser);

const regularUser = { 
    email: "djhbjfb@g@gmail.com",
    fullname : {
        userfullname:{
            firstname : "harry ",
            lastname: "kurmi",
        }
    }
}
console.log(regularUser.fullname.userfullname);

//object combine 
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 2:"b"}
// const obj3 = { obj1, obj2 } 
// const obj3 = Object.assign(obj1,obj2) // we can use this but usable or proffesional 
// const obj3 = Object.assign({} ,obj1,obj2) // usable and preferable 
const obj3 = {...obj1, ...obj2} // new approch 

console.log(obj3)

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('islogged'));


const course = { 
    coursename :"js learning " ,
    price : ' 900' ,
    courseInstructor : " parikhit ",
}

//course.courseInstructor 
const {courseInstructor} = course
const {courseInstructor:Instructor} = course // destructure 

console.log(courseInstructor);
console.log(Instructor);

// const navbar = ({company})  => { // destructureing syntex 

// }
//  navbar(company = " parikhit")

// ++++++++++++++++++++++++++++++++++++++++++++++++++//++++++++++++++++++

// API 
// json:
// {
//   "name": "parikhit",
//   "course": "english ",
//   "price" : "free ",
// }
// json is  js object notation 
