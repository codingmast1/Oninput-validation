 <script type="text/javascript">
         	//function for firstname validation//

  function Firstname_val() {
    var x = document.getElementById("myInput").value;
   if(x.length <=2){
 document.getElementById("demo").innerHTML = "This field contains at least three characters";
}
else{
 document.getElementById("demo").innerHTML = " ";
}
}

         	//function for lastname//

   function lastname_val() {
 var y = document.getElementById("mylstnm").value;
   if(y.length <=2){
 document.getElementById("demo").innerHTML = "This field contains at least three characters";
}
   else{
 document.getElementById("demo").innerHTML = " ";
}
}



//Function for Email//
var myEmail = document.getElementById("reg");
var eml = document.getElementById("eml");

myEmail.oninput =function(){
	var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(myEmail.value.match(pattern)){
		document.getElementById("eml").innerHTML = " ";
	}
	else{
		document.getElementById("eml").innerHTML = "Please provide a valid email address ";
	}
}



//function for password//

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var cnfpass = document.getElementById("cnfpass");
var p = document.getElementById("p");

myInput.oninput = function(){
	//Validate  password//
	var v = /[a-z]/;
	var u = /[A-Z]/;
	var w = /[0-9]/;
	
	if(myInput.value.match(v) && myInput.value.match(u) && myInput.value.match(w) && myInput.value.length >= 8){
		document.getElementById("letter").innerHTML = " ";
	}
	else{
		document.getElementById("letter").innerHTML = "Password must contains numeric,lowercase and uppercase characters and minimum 8 characters";
	}
}



//Function for confirm Password//

cnfpass.oninput = function(){
    if(myInput.value == cnfpass.value){
    	document.getElementById("p").innerHTML = " ";
    }
    else{
    	document.getElementById("p").innerHTML = "Password does not match";
    }


}
         </script>


