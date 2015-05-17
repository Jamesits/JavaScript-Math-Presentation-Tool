var config = {
	"profiles": [
		{
			"id": "bisection",
			"name": "Bisection"
		},
		{
			"id": "iteration",
			"name": "Iteration"
		}
	]
};

navbar_templates = $("#template-navbar-method").html();
$("#navbar-method").html(Mustache.render(navbar_templates, config));