function newton(func, prime_func, x0, eps, maxi) {
    x=[x0];
    for (i = 0; i < maxi; i++) {
        x.push(x[x.length-1]-feval(func,x[x.length-1])/feval(prime_func,x[x.length-1]));
        if (abs(x[x.length-1]-x[x.length-2])<eps)
            break;
	}
    return x[x.length-1];
}

function get_result() {
	func = formdata["function"];
	prime_func = formdata["directive"];
	eps = formdata["precision"];
	x0 = formdata["initial"];
	maxi = formdata["maxi"];
	x = newton(func, prime_func, x0, eps, maxi);
	return x;
}