function newton(func, prime_func, x0, eps, maxi) {
    var x=[x0];
    for (var i = 0; i < maxi; i++) {
        x.push(x[x.length-1]-feval(func,x[x.length-1])/feval(prime_func,x[x.length-1]));
        if (abs(x[x.length-1]-x[x.length-2])<eps)
            break;
	}
    return x[x.length-1];
}

function get_result() {
	var func = formdata["function"];
	var prime_func = formdata["directive"];
	var eps = formdata["precision"];
	var x0 = formdata["initial"];
	var maxi = formdata["maxi"];
	var x = newton(func, prime_func, x0, eps, maxi);
	return x;
}