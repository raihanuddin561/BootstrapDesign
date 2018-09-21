

$("#btn").click(function(){
	var start = $("#startNumber").val();
	var end = $("#endNumber").val();
	var result = 0;
	if((isNaN(start)) || (isNaN(end))){
		alert("please give numberical value");
}else{
	
	start = parseInt(start);
	end = parseInt(end);
	for(var i = start; i<=end; i++){
		result = i+result;
	}
	$("#result").val(result);
}
}
);

var redBtnElement = document.getElementById("redbtn");
redBtnElement.onclick = function(){
	var divElement = document.getElementById("divOne");
	divElement.className = "class-one";
}
var redBtnElement = document.getElementById("greenbtn");
redBtnElement.onclick = function(){
	var divElement = document.getElementById("divOne");
	divElement.className = "class-two";
}
var redBtnElement = document.getElementById("bluebtn");
redBtnElement.onclick = function(){
	var divElement = document.getElementById("divOne");
	divElement.className = "class-three";
}
var redBtnElement = document.getElementById("defaultbtn");
redBtnElement.onclick = function(){
	var divElement = document.getElementById("divOne");
	divElement.className = "class-four";
}

$('#tblbtn').click(function(){
	var firstname = $("#fname").val();
	var lastname = $("#lname").val();
	var fullname = firstname+" "+lastname;
	$("#fullname").val(fullname);
});