function iteration(func, x0, eps, maxi) {
	x = [x0];
    for (i = 0; i < maxi; i++) {
        x.push(feval(func, x[x.length-1]));
        if (Math.abs(x[x.length-1]-x[x.length-2])<eps)
            break;
	}
    return x[x.length-1];
}

function get_result() {
	func = formdata["function"];
	eps = formdata["precision"];
	x0 = formdata["initial"];
	maxi = formdata["maxi"];
	x = iteration(func, x0, eps, maxi);
	return String(x);
}