function count(eps, length){
	return Math.floor(Math.log(length / eps, 2) - 1.0) + 1;
}

function bisection(func, a, b, iter_times) {
	lval = feval(func, a);
	rval = feval(func, b);
	if (lval == 0) {
		return a, 0;
	}
	else if (rval == 0) {
		return b, 0;
	}
	else if (lval * rval > 0){
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

function get_result() {
	func = formdata["function"];
	eps = formdata["precision"];
	a = formdata["min"];
	b = formdata["max"];
	x = bisection(func, a, b, count(eps, b - a));
	return x;
}