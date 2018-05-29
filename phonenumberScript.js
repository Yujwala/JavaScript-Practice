function myFunction(){
var input = document.getElementById("InputField").value;
document.getElementById("string").innerHTML = "The input value is" + " " +input;
var result = input.replace(/[/" ".*+?^${}()|[\-\\]/g, "");
document.getElementById("result").innerHTML = "The result value is" + " " +result;
}
