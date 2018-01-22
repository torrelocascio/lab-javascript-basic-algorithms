// Names and Input


//Conditionals


// Lorem ipsum generator

//Testing File Out
console.log("I'm Ready")
var hacker1 = "Chris"
console.log("The driver's name is " + hacker1)
var hacker2 =prompt("What's the navigator's name?")
console.log("The navigator's name is " + hacker2)

if (hacker1.length>hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker2.length>hacker1.length){
  console.log("Yo navigator got the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("What? You both have the same name length? " + hacker1.length + "  characters")
}
for (var i = 0;i<hacker1.length; i= i+1){
  console.log(hacker1[i].toUpperCase() + "" )
}

