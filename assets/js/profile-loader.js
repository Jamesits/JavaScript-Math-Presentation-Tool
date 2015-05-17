var config = {
	"profiles": [
		{
			"id": "bisection",
			"name": "Bisection"
		},
		{
			"id": "iteration",
			"name": "Iteration"
		},
		{
			"id": "newton",
			"name": "Newton"
		}
	]
};

// use hash to get current profile

function set_current_profile(id) {
	for (profile in config.profiles) {
		if (profile.id == id) {
			window.location.hash = id;
			break;
		}
	}
	if ($.isNumeric(id) && id < config.profiles.length) {
		window.location.hash = config.profiles[id].id;
	}
	$("#navbar-method li").removeClass("active");
	$(window.location.hash).addClass("active");
}

function get_current_profile() {
	if (window.location.hash.slice(1) == "")
		set_current_profile(0);
	return window.location.hash.slice(1);
}

// Fill nav bar
navbar_templates = $("#template-navbar-method").html();
$("#navbar-method").html(Mustache.render(navbar_templates, config));
current_profile = get_current_profile();