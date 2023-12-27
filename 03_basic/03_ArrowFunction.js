// this ==> make current contest 
const user = {
    username: "parikhit",
    price :999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to my website `);
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = " sam "
// user.welcomeMassage()

// console.log(this);

// function bhai(){
//     let username = "parikhit "
//     console.log(this.username);
// }
// Chai()

// const chai = function (){
//     let username = "parikhit "
//     console.log(this.username);
// }
// Chai()

const chai =  ()=>{
    let username = "parikhit "
    console.log(this);
}
//chai()


//rrow function syntex 

// basic 
//  const addTwo = (num1,num2) => {
//     return num1 + num2 // explicite return 
//  }
//  console.log(addTwo(3,4))

 // implicite return 
//  const addTwo = (num1,num2)=> (num1+num2)
 const addTwo = (num1,num2)=> ({username:"parikhit"})


 console.log(addTwo(3.4));