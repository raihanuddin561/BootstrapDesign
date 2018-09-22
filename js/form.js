
function checkFirstname(){
	var firstName = $("#firstName").val().length;
	if(firstName<=6){
		$("#firstNameError").text("Firs Name should be more than 6 character");
	}else{
		$("#firstNameError").text("");
	}
}

function checkPassword(){
	var passLength = $("#password").val().length;
	if(passLength<8){
		$("#passwordError").text("Password length must be 8");
	}else{
		$("#passwordError").text("");
	}
}


function checkConfirmPassword(){
	var password = $("#password").val();
	var confirmPassword = $("#confirmPassword").val();
	
	if(password != confirmPassword){
		$("#confirmPasswordError").text("Password not matched");
	}else{
		$("#confirmPasswordError").text("");
	}
}

function checkEmail(){
	var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	if(pattern.test($("#emailAddress").val())){
		$("#emailError").text("");
	}else{
		$("#emailError").text("Invalid email");
	}
}


$("#firstName").click(function(){
		checkFirstname();
	});
$("#firstName").keyup(function(){
		checkFirstname();
	});
$("#firstName").blur(function(){
	checkFirstname();
});

$("#password").click(function(){
	checkPassword();
});
$("#password").keyup(function(){
	checkPassword();
});
$("#password").blur(function(){
	
	checkPassword();
	
});

$("#confirmPassword").keyup(function(){
	checkConfirmPassword();
});
$("#confirmPassword").blur(function(){
	
		checkConfirmPassword();
	
});






$("#emailAddress").click(function(){
	checkEmail();
});
$("#emailAddress").keyup(function(){
	checkEmail();
});
$("#emailAddress").blur(function(){
	
	checkEmail();
	
});

$("#registrationForm").submit(function(){

});