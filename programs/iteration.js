function iteration(func, x0, eps, maxi) {
	var x = [x0];
    for (var i = 0; i < maxi; i++) {
        x.push(feval(func, x[x.length-1]));
        if (Math.abs(x[x.length-1]-x[x.length-2])<eps)
            break;
	}
	console.log(x);
    return x[x.length-1];
}

function get_result() {
	var func = formdata['function'];
	var eps = formdata['precision'];
	var x0 = formdata['initial'];
	var maxi = formdata['maxi'];
	var x = iteration(func, x0, eps, maxi);
	return x;
}