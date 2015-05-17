var a = [], b = [];

function process_input(m) {
	dataset = m.split("\n");
	for (i in dataset) {
		if (dataset.hasOwnProperty(i)) {
            d = dataset[i].split(" ");
            a.push(d[0]);
            b.push(d[1]);
        }
	}
}

function legrange(x, y, _x) {
	var _y,t;
    var n,i,j;
	n = x.length;
    _y=0;
    for(i=0;i<=n-1;i++)
    {
        t=1;
        for(j=0;j<=n-1;j++)
        {
            if(j!=i)
            {
                t*=(_x-x[j])/(x[i]-x[j]);
            }
            _y+=t*y[i];
        }
    }
    return "插值点：(" + _x + ", " + _y + ")";
}

function get_result() {
	_x = formdata["insertpoint"];
	matrix = formdata["extendeddata"];
    process_input(matrix);
	x = legrange(a, b, _x);
	return x;
}