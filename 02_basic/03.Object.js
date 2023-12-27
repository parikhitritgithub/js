//singleton
//Object.create

//object literals
const mySym = Symbol("key1");

const JsUser = {
    name : "Parikhit",
    "Fullname" : "Parikhit kurmi",
    mySym: "mykey1",
    [mySym]:"mykey1",
    age : 20 ,
    location : "dibrugarh" ,
    email :"parikhitkurmi444@gmail.com",
    isLoggedIn : false,
    LastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email) // usable but not prefer
console.log(JsUser["email"]) // prefer and mostly usable 
console.log(JsUser["Fullname"])
console.log(JsUser["mySym"])
console.log(typeof JsUser["mySym"]) // not prefer and wrong    
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])
JsUser.email = " parikhitkurmi44@gmail.comp"
// Object.freeze(JsUser)
JsUser.email = " parikhitkurmi44@gmail.com"
// console.log(JsUser)


// function
JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())





