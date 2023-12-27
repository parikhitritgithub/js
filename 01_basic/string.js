  const name  = "parikhitkurmi"
  const repoCount = 50

//   console.log(name + repoCount + " value ") outdated 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // better and readable (mordern syntex)

const gamename = new String('parikhit')

console.log(gamename[0]);
console.log(gamename._proto_);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('h'));


const newString = gamename.substring(0, 4) 
console.log(newString);
// we use negative value in slice 
const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

const newStringone = "   parikhit    "
console.log (newStringone) 
console.log(newStringone.trim())
console.log(newStringone.trimEnd())
console.log(newStringone.trimStart())
const url =  "https://parikhit.com//nfkjne%20rfnf"

console.log(url.replace('%20', '-'))

console.log(url.includes('hjbifb'))



