let r=1, g=1, b=1, vall;

vall = prompt("Введите натуральное число");

function isNaturalNumber (vall) {
    var pattern = /^(0|([1-9]\d*))$/;
	return pattern.test(vall);	
}

if(isNaturalNumber(vall)){ 
	getColor();
 }else{
	alert ("Введите натуральное число!!!");
	location.reload();
 }

function getColor(){
	var val = parseInt(vall);
	r = r + val;
	g = g + val;
	b = b + val;
	if (r, g, b >= 15) {
		r = r - 4;
		g = g - 3;
		b = b -5;
	}
	var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
	alert(c);
	document.body.style.backgroundColor = c;
}
