// Names and Input


//Conditionals


// Lorem ipsum generator

var hacker1 = "Chris"
console.log("The driver's name is " + hacker1)
var hacker2 =prompt("What's the navigator's name?")
console.log("The navigator's name is " + hacker2)

var string = ""
if (hacker1.length>hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker2.length>hacker1.length){
  console.log("Yo navigator got the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("What? You both have the same name length? " + hacker1.length + "  characters")
}
for (var i = 0;i<hacker1.length; i= i+1){
  string = string + hacker1[i].toUpperCase() + " "
}


var string2 = ""
for (var i = hacker2.length-1; i>-1; i= i-1){
  string2 = string2 + hacker2[i] + " "
}
console.log(string)
console.log(string2)

var nameArrayLex = [hacker1,hacker2].sort()

if(hacker1 === hacker2){ console.log("Holy crap you have the same name?, The Driver Goes First then")
} else if(nameArrayLex[0]===hacker1){
  console.log("The Driver Goes First!")} else if (nameArrayLex[1]===hacker1){
    console.log("The Navigator Goes First")} else {console.log("Not sure what's going on")}
  

console.log(nameArrayLex)