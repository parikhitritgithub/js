// Date 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getTimezoneOffset());

console.log(typeof myDate) // object 
 
// let mycreatedDate = new Date(2023 , 11 , 23 )// month start from 0 (bez its a array ) in js 
let mycreatedDate = new Date("2023-11-23") // here month start from 1 (not an array)

console.log(mycreatedDate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())


// `${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday : "long",
})





