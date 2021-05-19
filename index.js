function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")

  } else(
    rollTheDice()
  )

}




function rollTheDice(){
  var randomnumber1;

  var rn=Math.random()*6;
  var randomnumber1=Math.floor(rn)+1;
  //console.log(randomnumber1);
  var name = "images/dice" + randomnumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",name);

  var randomnumber2;
  var ron=Math.random()*6;
  var randomnumber2=Math.floor(ron)+1;
  //console.log(randomnumber1);

  var name2 = "images/dice" + randomnumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src",name2);

  if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩PLayer 1 Wins!";
  }
  else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="PLayer 2 Wins!🚩";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }

}
document.querySelector("body").onload = checkRefresh(); 
