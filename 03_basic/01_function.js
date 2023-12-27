function sayMyName (){
    console.log("a") ; 
    console.log("b") ; 
    console.log("c") ; 
    console.log("d") ; 
    console.log("e") ; 
}
// sayMyName ==> reference 
// () ==> execution 
sayMyName()

function addtwonumbers(number1 , number2){
    console.log(number1+number2)
    // let result = number1 + number2 
    // return result 
    return number1+number2

}
addtwonumbers(3,4)

function loginusermassage(username= "sam"){
    if(!username){ // username == undefine 
        console.log("please enter username ");
        return ;

    }
    return `${username}just logged in `
} 

console.log(loginusermassage("parikhit"))
console.log(loginusermassage())


function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(202,400,500))

const user = {
    username:"parikhit",
    price : 100 ,// prices then give me the value undefine 
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);

}
handelobject(user)
handelobject({
    username : "sam ",
    price : 900,
})

const myNewArray = [200,400,100,600]
function returnthepositionvalueofarray(getArray){
    return getArray[2];

}
console.log(returnthepositionvalueofarray(myNewArray));