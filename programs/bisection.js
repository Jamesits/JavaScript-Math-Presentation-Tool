      // Basic function define
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
feval = function(func, val){r = eval(func.replace(/x/gi, val)); return r;}

// calculate
count = function(eps, length){
	return Math.floor(Math.log(length / eps, 2) - 1.0) + 1;
}

bisection = function(func, a, b, iter_times) {
	lval = feval(func, a);
	rval = feval(func, b);
	if (lval == 0) {
		return a, 0;
	}
	else if (rval == 0) {
		return b, 0;
	}
	else if (lval * rval > 0){
		console.log("No solution");
		return undefined;
	}

	current_left = a;
	current_right = b;
	x_middle = (current_left + current_right) / 2;

	for (i = 0; i < iter_times; i++) {
		//console.log("Iteration #", i + 1);
		lval = feval(func, current_left);
	    rval = feval(func, current_right);
		x_middle = (current_left + current_right) / 2;
		f_middle = feval(func, x_middle);
		//console.log("x = ", x_middle, ", f(x) = ", f_middle, ", a = ", current_left, ", b = ", current_right, ", l = ", lval, ", r = ", rval);
		if (f_middle == 0) {
			break;
		}
		else if (lval * f_middle < 0) {
			current_right = x_middle;
		}
		else if (rval * f_middle < 0) {
			current_left = x_middle;
		}
	}
	return x_middle;
}

function run() {
	func = $("#func").val();
	eps = $("#prec").val();
	a = $("#min").val();
	b = $("#max").val();
	x = bisection(func, a, b, count(eps, b - a));
	//console.log(x);
	$("#result").text(String(x));
}