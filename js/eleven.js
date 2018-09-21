var btnElement = document.getElementById("btn");
		//var field = document.getElementById("lastname");
		  function demo(){
			var firstname = document.getElementById("firstname").value;
			if(firstname == ""){
				document.getElementById("firstfield").innerHTML = "Please enter firstname";
				
			}else{
				document.getElementById("firstfield").innerHTML="";


					var lastname = document.getElementById("lastname").value;
					if(lastname.length<=4){
						document.getElementById("lastnameLabel").innerHTML = "Input last name more than 4 character.";
					}else{
						document.getElementById("lastnameLabel").innerHTML = "";
					}

			}
			
		}


		btnElement.onclick = function () {
			var firstname = document.getElementById("firstname").value;
			var lastname = document.getElementById("lastname").value;
			if((firstname == "" || lastname =="")){
				alert("Empty Field");
			}else{
				var fullname = (firstname+" "+lastname);
				alert(fullname);
			}
			
		};