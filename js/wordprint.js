$("#submit").click(function(){
	nameCheck();
});
function nameCheck(){
	document.getElementById("divOne").innerHTML = "";
	var name = document.getElementById("name").value;
	
var letter = name.split("");
for(var i = 0;i<letter.length;i++){
	
	switch(letter[i]){
		case 'A':
		case 'a':
			document.getElementById("divOne").innerHTML += "<br>"+"A = Auspicious";
			
			break;
		case 'B':
		case 'b':
			document.getElementById("divOne").innerHTML += "<br>"+"B = Brilliant";
			break;
		case 'C':
		case 'c':
			document.getElementById("divOne").innerHTML += "<br>"+"C = Charming";
			
			break;
		case 'D':
		case 'd':
			document.getElementById("divOne").innerHTML += "<br>"+"D = Decent";
			break;
		case 'E':
		case 'e':
			document.getElementById("divOne").innerHTML += "<br>"+"E = Enthusiastic";
			break;
		case 'F':
		case 'f':
			document.getElementById("divOne").innerHTML += "<br>"+"F = Fascinated";
			break;
		case 'G':
		case 'g':
			document.getElementById("divOne").innerHTML += "<br>"+"G = Glorious";
			break;
		case 'H':
		case 'h':
			document.getElementById("divOne").innerHTML += "<br>"+"H = Honest";
			break;
		case 'I':
		case 'i':
			document.getElementById("divOne").innerHTML += "<br>"+"I = Innovative";
			break;
		case 'J':
		case 'j':
			document.getElementById("divOne").innerHTML += "<br>"+"J = Jovial";
			break;
		case 'K':
		case 'k':
			document.getElementById("divOne").innerHTML += "<br>"+"K = Kind-hearted";
			break;
		case 'L':
		case 'l':
			document.getElementById("divOne").innerHTML += "<br>"+"L = Loyal";
			break;
		case 'M':
		case 'm':
			document.getElementById("divOne").innerHTML += "<br>"+" M = Motivate";
			break;
		case 'N':
		case 'n':
			document.getElementById("divOne").innerHTML += "<br>"+"N = Neat & clean";
			break;
		case 'O':
		case 'o':
			document.getElementById("divOne").innerHTML += "<br>"+"O = Outstanding ";
			break;
		case 'P':
		case 'p':
			document.getElementById("divOne").innerHTML += "<br>"+"P = Passionate";
			break;
		case 'Q':
		case 'q':
			document.getElementById("divOne").innerHTML += "<br>"+"Q = Qualitative";
			break;
		case 'R':
		case 'r':
			document.getElementById("divOne").innerHTML += "<br>"+"R = Radiant";
			break;
		case 'S':
		case 's':
			document.getElementById("divOne").innerHTML += "<br>"+"S = Self-esteem";
			break;
		case 'T':
		case 't':
			document.getElementById("divOne").innerHTML += "<br>"+"T = Thankful";
			break;
		case 'U':
		case 'u':
			document.getElementById("divOne").innerHTML += "<br>"+"U = Unbeatable";
			break;
		case 'V':
		case 'v':
			document.getElementById("divOne").innerHTML += "<br>"+"V = Veracious";
			break;
		case 'W':
		case 'w':
			document.getElementById("divOne").innerHTML += "<br>"+"W = Wholehearted";
			break;
		case 'X':
		case 'x':
			document.getElementById("divOne").innerHTML += "<br>"+"X = Xenial";
			break;
		case 'Y':
		case 'y':
			document.getElementById("divOne").innerHTML += "<br>"+"Y = Youthful";
			break;
		case 'Z':
		case 'z':
			document.getElementById("divOne").innerHTML += "<br>"+"Z = Zestful";
			break;
		case ' ':
			document.getElementById("divOne").innerHTML += "";
			
			break;
		default:
			document.getElementById("divOne").innerHTML += "<br>Enter only String value";
			break;

	}
}
}

