//immediately Invoked Function Expressions (IIFE)

// function chai (){
//     console.log(`welcome to DB`);
// }
// chai()

// after using iife 

(function chai (){
    //named iife
    console.log(`welcome to DB`);
})(); //; is important 

// to remove global scope variables polution or problem we use iife 

// after using arrow function 
((name) =>{
    // simple iife
    console.log(`db connected ${name}`);
})('parikhit');