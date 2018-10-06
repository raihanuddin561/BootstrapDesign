$("#fname").keyup(function(){
	var firstname = $("#fname").val();
	$("#tblfirstname").text(firstname);
});
$("#lname").keyup(function(){
	$("#tbllastname").html($("#lname").val());
});
$("#lname").blur(function(){
	var firstname = $("#fname").val();
	var lastname = $("#lname").val();
	var fullname = firstname+" "+lastname;
	$("#tblfullname").text(fullname);
});

function createContent(){
	var newHeadingElement = document.createElement("h1");
	var newParagraphElement = document.createElement("p");
	newHeadingElement.innerHTML = "This is heading";
	newParagraphElement.innerHTML = "this is paragraph";
	document.getElementById("myDiv").appendChild(newHeadingElement);
	document.getElementById("myDiv").appendChild(newParagraphElement); 
}

$("#btn").click(function(){
	createContent();
});

$("#img1").click(function(){
	var srcPath = $(this).attr("src");
	$("#mainImage").attr("src",srcPath);
});
$("#img2").click(function(){
	var srcPath = $(this).attr("src");
	$("#mainImage").attr("src",srcPath);
});
$("#img3").click(function(){
	var srcPath = $(this).attr("src");
	$("#mainImage").attr("src",srcPath);
});
$("#img4").click(function(){
	var srcPath = $(this).attr("src");
	$("#mainImage").attr("src",srcPath);
});