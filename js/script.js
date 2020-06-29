console.log("Scopri se la parola digitata è palindroma");


var btn = document.getElementById("btn");



btn.addEventListener("click", function(){

  var name = document.getElementById("name").value;
  var letters=[];


  for (i=name.length-1; i>= 0; i--){
  letters +=(name[i]);
  console.log(letters);
  }

  if(name === letters){
    document.getElementById("result").innerHTML="PALINDROMO";
  }else{
        document.getElementById("result").innerHTML="no";
  }

})
