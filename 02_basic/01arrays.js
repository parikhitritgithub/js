// array

const myArray = [0,1,2,3,4]
//JavaScript array-copy operations create shallow copies. 
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
console.log(myArray[0])

const myHero = ["Iron man" , "Spiderman"]
console.log(myHero[0])

const mrArray2 = new Array(1,2,3,4,5,6,7)

//Array methods 

// myArray.push(8)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(2))

// const newarray = myArray.join()
// console.log(myArray);
// console.log(typeof myArray);

//slice , splice 

console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray)

const myn2 = myArray.splice(1, 3)
console.log("C" , myArray)//splice operation manupulate the originally value whereas slice operation not .
console.log(myn2);


