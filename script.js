// GENERATE THE RANDOM NUMBER
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var diceRandom1= document.getElementById("dice1").src=("images/dice"+randomNumber1+".png");

var diceRandom2= document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");
// var diceRandom2= document.getElementById("dice2").src=("images/dice"+randomNumber2+".png");
 
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="🎖 Player 1 wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins! 🎖";
}else{
    document.querySelector("h1").innerText="🙂 It's a Draw!!";
}
