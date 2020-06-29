console.log("Scopri se la parola digitata è palindroma");

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//
//   var name = document.getElementById("name").value;
//   var letters=[];
//
//
//   for (i=name.length-1; i>= 0; i--){
//   letters +=(name[i]);
//   console.log(letters);
//   }
//
//   if(name === letters){
//     document.getElementById("result").innerHTML="PALINDROMO";
//   }else{
//         document.getElementById("result").innerHTML="no";
//   }
//
// })

var btnPalindrome = document.getElementById("btnPalindrome"); //call the button

btnPalindrome.addEventListener("click", function (){ //after button click
var name = document.getElementById("name").value; //get name value
name = name.toUpperCase();
if (name === stringIsReverseString(name)){
  document.getElementById("result").innerHTML="PALINDROME";
} else{
  document.getElementById("result").innerHTML="Not palindrome";
}
})

var btnEvenOdd = document.getElementById("btnEvenOdd"); //call the button

btnEvenOdd.addEventListener("click", function (){ //after button click
var numUser = document.getElementById("num").value; //get name value
var numCpu = getRandomInt(1,5);
var bet = document.getElementById("bet").value; //get name value


console.log(parseInt(numUser));
console.log(numCpu);

if(numUser <6 && numUser >0){
  if(bet == "Pari" && sumIsEven(numUser,numCpu) == true){
    document.getElementById("evenOdd").innerHTML="HAI VINTO! La somma è: " + bet;
    console.log(sumIsEven(numUser,numCpu));

  }else if (bet == "Dispari" && sumIsEven(numUser,numCpu) == false){
      document.getElementById("evenOdd").innerHTML="HAI VINTO! La somma è: " + bet;
      console.log(sumIsEven(numUser,numCpu));
    }else{
      document.getElementById("evenOdd").innerHTML="Purtroppo hai perso!";
      console.log(sumIsEven(numUser,numCpu));
  }

} else{
  alert("Il numero digitato non è corretto");
}

})



function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}


function stringIsReverseString(array){
  var newArray=[];
  for (i=array.length-1; i>= 0; i--){
  newArray +=(array[i]);
  }return newArray;
}

function sumIsEven(num1,num2){
  var somma = num1+num2;
  if (somma%2 == 0){
  return true;
} else{
  return false;}
}
