



  var randomNumber1 =  Math.random();
  randomNumber1 =Math.floor(randomNumber1*5);

  var randomNumber2 =  Math.random();
  randomNumber2 =Math.floor(randomNumber2*5);

  var diceImages = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];


 if(randomNumber1 === randomNumber2){
   document.querySelector("h1").innerText= "Draw";
 }else if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerText= "Player 1 Wins!";
}else{
  document.querySelector("h1").innerText= "Player 2 Wins!";
}

//console.log("RandomNumber1 =" + randomNumber1);
//console.log("Image =" + diceImages[randomNumber1]);
document.querySelector(".img1").attributes.src.textContent=diceImages[randomNumber1];

//console.log("RandomNumber2 =" + randomNumber2);
//console.log("Image =" + randomNumber2);
document.querySelector(".img2").attributes.src.textContent=diceImages[randomNumber2];
