var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var asin = Math.asin;
var acos = Math.acos;
var atan = Math.atan;
var log = Math.log;
var ln = function(x){return Math.log(x, Math.exp(1));}
var pow = Math.pow;
var abs = Math.abs;

var formdata = {};

function get_form_data(){
	for (i in compiled_config.profiles[current_profile].input) {
		if (compiled_config.profiles[current_profile].input.hasOwnProperty(i)) {
			formdata[compiled_config.profiles[current_profile].input[i]] = $("#" + compiled_config.profiles[current_profile].input[i]).val();
		}
	}
    //console.log(formdata);
}

// Evaluate a function
function feval(func, val) {return eval(func.replace(/x/gi, val));}

function execute_prog() {
    get_form_data();
	$.get( "programs/" + get_current_profile() + ".js", function(data) {
		eval(data);
		r = get_result();
		//console.log(r);
		$("#result").text(String(r));
	});
}

