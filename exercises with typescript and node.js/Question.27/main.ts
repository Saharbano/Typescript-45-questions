/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let alienColor:string ="green";

/*• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points. */


if(alienColor === "green"){
    console.log("player just earned 5 ponit")
}


else if(alienColor ==="yellow"){
    console.log("player just earned 10 points!")}


    else if(alienColor ==="red"){
        console.log("player just earned 15 points")}
    
 else {
    console.log("please select right color")
 }


 //versions 2 of this program,
 alienColor = "yellow";


 if(alienColor === "green"){
    console.log("player just earned 5 ponit")
}


else if(alienColor ==="yellow"){
    console.log("player just earned 10 points!")}


    else if(alienColor ==="red"){
        console.log("player just earned 15 points")}
    
 else {
    console.log("please select right color")
 }


 
 //versions 3 of this program,
 alienColor = "red";


 if(alienColor === "green"){
    console.log("player just earned 5 ponit")
}


else if(alienColor ==="yellow"){
    console.log("player just earned 10 points!")}


    else if(alienColor ==="red"){
        console.log("player just earned 15 points")}
    
 else {
    console.log("please select right color")
 }