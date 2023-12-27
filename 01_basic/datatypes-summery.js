//primitive datatype 

// 7 types : String , number , boolean , null , undefined , symbol(make value unique) , BigInt 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

//js dynamically type language 

//Reference type or Non primitive type 

// array , objects , functions ;
const heros = ["spiderman" , "ironman" , "nova"]; //array

//object 
 let myObj = {
    name: "parikhit",
    age: 20,

}
//function 
function myFunction(){
    console.log("Hello World")
}

console.log(typeof myFunction)
console.log(typeof myObj)

//----------------------------------------------------------------------
//memories are two types stack memory , heap memory ; 
//stack (primitive) , Heap(Non-primitve)

let myinstagramname = "parikhit kurmi"
let anothername = myinstagramname 
anothername = "parikhit"
console.log(myinstagramname)
console.log(anothername)

//Heap
let userOne = {
    email :"parikhit",
    upi:"xyz@ybl",
}

let userTwo = userOne 

 userTwo.email = "trbcxgamer@gmail.com"

 console.log(userOne)
 console.log(userTwo)
