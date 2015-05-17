// reference: http://stackoverflow.com/a/966938/2646069
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function newton_insert(x0, h, f, _x) {
	var _y, t;
    var i,j,n;
	n = f.length;
    t=(_x-x0)/h;
    for(j=1;j<=n-1;j++)
    {
        for(i=0;i<=n-j-1;i++)
        {
            f[i][j]=f[i+1][j-1]-f[i][j-1];
        }
    }
    _y=f[0][n-1];
    for(j=n-2;j>=0;j++)
    {
        _y=f[0][j]+(t-j)/(j+1)*_y;
    }
    return "插值点：(" + _x + ", " + _y + ")";
}

function get_result() {
	x0 = formdata["initial"];
	h = formdata["step"];
	_x = formdata["insertpoint"];
	max = formdata["maxi"];
	matrix = formdata["extendeddata"];
    d = matrix.split("\n");
    var f = createArray(maxi, maxi);
    for (var i in d) {
        if (d.hasOwnProperty(i)) {
            f[i][0] = d[i];
        }
    }
	x = newton_insert(x0, h, f, _x);
	return x;
}