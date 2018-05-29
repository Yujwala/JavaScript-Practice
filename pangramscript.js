function myFunction(){
 var input = document.getElementById("InputField").value;
 document.getElementById("string").innerHTML = "The input value is" + " " +input;
 var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 for(i=0; i<alphabet.length; i++)
 {
   if(input.indexOf(alphabet[i]) < 0)
   {
     document.getElementById("result").innerHTML = "It is not a pangram";
   }
   else {
     document.getElementById("result").innerHTML = "It is a pangram";
   }
 }
}
