function myFunction(){
 var input = document.getElementById("InputField").value;
 document.getElementById("string").innerHTML = "The input value is" + " " +input;
 var rs= "";
 for(var i=input.length-1; i>=0; i--)
 {
   rs+=input[i];
 }
 document.getElementById("result").innerHTML= "The reversed string value is" + " " +rs;
}
