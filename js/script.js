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

var btn = document.getElementById("btn"); //call the button

btn.addEventListener("click", function (){ //after button click
var name = document.getElementById("name").value; //get name value
name = name.toUpperCase();
if (name === stringIsReverseString(name)){
  document.getElementById("result").innerHTML="PALINDROME";

} else{
  document.getElementById("result").innerHTML="Not palindrome";
}

})

function stringIsReverseString(array){
  var newArray=[];
  for (i=array.length-1; i>= 0; i--){
  newArray +=(array[i]);
  }return newArray;
}
