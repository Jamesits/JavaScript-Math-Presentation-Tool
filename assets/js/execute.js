var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var asin = Math.asin;
var acos = Math.acos;
var atan = Math.atan;
var log = Math.log;
var ln = function(x){return Math.log(x, Math.exp(1));}
var pow = Math.pow;

// Evaluate a function
function feval(func, val) {return eval(func.replace(/x/gi, val));}

function execute_prog() {
	$.get( "programs/" + get_current_profile() + ".js", function(data) {
		
	});
}