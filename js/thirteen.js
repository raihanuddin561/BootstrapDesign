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
})