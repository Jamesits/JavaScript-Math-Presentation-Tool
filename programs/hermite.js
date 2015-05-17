var a = [], b = [], c = [];

function process_input(m) {
	dataset = m.split("\n");
	for (var i in dataset) {
		if (dataset.hasOwnProperty(i)) {
            d = dataset[i].split(" ");
            a.push(d[0]);
            b.push(d[1]);
            c.push(d[2]);
        }
	}
}

function hermite(x, f, df, _x) {
	var _y, l, dl;
    var n, i, j;
	n = x.length;
    _y = 0;
    for (i = 0; i <= n-1; i++)
    {
        l = 1;
        for (j = 0; j <= n-1; j++)
	        if(j != i)
	            l*=(_x-x[j])/(x[i]-x[j]);
        dl=0;
        for(j = 0; j <= n-1; j++)
            if(j != i)
                dl+=1/(x[i]-x[j]);
        _y += (1-2*dl*(_x-x[i]))*l*l+(_x-x[i])*l*l*df[i];
     }
    return "插值点：(" + _x + ", " + _y + ")";
}

function get_result() {
	_x = formdata["insertpoint"];
	matrix = formdata["extendeddata"];
    process_input(matrix);
	x = hermite(a, b, c, _x);
	return x;
}