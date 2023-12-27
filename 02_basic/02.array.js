const marvel_heros =["thor","iron man","spiderman"]
const DC_heros = ["superman" , "batman" , "flash"]
// marvel_heros.push(DC_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

//concat operator
const allhero  = marvel_heros.concat(DC_heros)
console.log(allhero)

//sprade operator (mostly use by developer now days ) 
const allnewhero = [...marvel_heros, ...DC_heros]
console.log(allnewhero)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("parikhit"))
console.log(Array.from("parikhit"))
console.log(Array.from({name:"parikhit"})) // intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3 ))
//is, from, of 


