



$("#submit").click(function(){
	var firstNameValue = $("#firstName").val();
	var lastNameValue = $("#lastName").val();
	var fullNameValue = firstNameValue + " " + lastNameValue;
	$("#fullName").val(fullNameValue);
});

var submitElement = document.getElementById('submit');
submitElement.onclick = function(){
	alert('Kaniz');
}


var redBtnElement = document.getElementById("redBtn");
redBtnElement.onclick = function(){
	var divOneElement = document.getElementById("divOne");
	//divOneElement.style.backgroundColor = "red";
	divOneElement.className = "class-one";

}

var greenBtnElement = document.getElementById("greenBtn");
greenBtnElement.onclick = function(){
	var divOneElement = document.getElementById("divOne");
	//divOneElement.style.backgroundColor = "green";
	divOneElement.className = "class-two";
}

var blueBtnElement = document.getElementById("blueBtn");
blueBtnElement.onclick = function(){
	var divOneElement = document.getElementById("divOne");
	//divOneElement.style.backgroundColor = "blue";
	divOneElement.className = "class-three";
}

var defaultBtnElement = document.getElementById("defaultBtn");
defaultBtnElement.onclick = function(){
	var divOneElement = document.getElementById("divOne");
	//divOneElement.style.backgroundColor = "black";
	divOneElement.className = "my-style";
}


function fullname(firstName,lastName){
			var fullName = firstName +" "+ lastName;
			alert(fullName);
		}
		
		
			
			var additionBtn = document.getElementById('addition');
			additionBtn.onclick = function(){
				var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var lastNumberValue = Number(document.getElementById('lastNumber').value);
				var result = firstNumberValue + lastNumberValue;
				document.getElementById('result2').value = result;
			}

			var additionBtn = document.getElementById('substraction');
			additionBtn.onclick = function(){
				var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var lastNumberValue = Number(document.getElementById('lastNumber').value);
				var result = firstNumberValue - lastNumberValue;
				document.getElementById('result2').value = result;
			}
		
		var additionBtn = document.getElementById('multiplication');
			additionBtn.onclick = function(){
				var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var lastNumberValue = Number(document.getElementById('lastNumber').value);
				var result = firstNumberValue * lastNumberValue;
				document.getElementById('result2').value = result;
			}
		
		var additionBtn = document.getElementById('divition');
			additionBtn.onclick = function(){
				var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var lastNumberValue = Number(document.getElementById('lastNumber').value);
				var result = firstNumberValue / lastNumberValue;
				document.getElementById('result2').value = result;
			}