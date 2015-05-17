var config = {
	"inputs": {
		"function": {
			"name": "Function",
			"type": "text",
			"placeholder": "Vaild math expression f(x), assuming f(x) = 0"
		},
		"directive": {
			"name": "Directive",
			"type": "text",
			"placeholder": "The directive f'(x)"
		},
		"initial": {
			"id": "initial",
			"name": "Iteration initial",
			"type": "number",
			"placeholder": "The very first value for iteration"
		}
	},
	"profiles": {
		"bisection": {
			"name": "Bisection",
			"input": ["function", "initial"]
		},
		"iteration": {
			"name": "Iteration",
			"input": ["function", "initial"]
		},
		"newton": {
			"name": "Newton Method",
			"input": ["function", "directive", "initial"]
		}
	}
};

// auto fix config
var compiled_config = {
	"inputs": [],
	"navbar": [],
	"profiles": []
};

for (item in config.inputs) {
	if(config.inputs.hasOwnProperty(item)){
            if (config.inputs[item].id == undefined) {
				config.inputs[item].id = item;
			}
			compiled_config.inputs.push(config.inputs[item]);
    }
}

for (profile in config.profiles) {
	if(config.profiles.hasOwnProperty(profile)){
            if (config.profiles[profile].id == undefined) {
				config.profiles[profile].id = profile;
			}
			config.profiles[profile].form = [];
			for (item in config.profiles[profile].input) {
				if (config.profiles[profile].input.hasOwnProperty(item)) {
					config.profiles[profile].form.push(config.inputs[config.profiles[profile].input[item]]);
				}
			}
			compiled_config.navbar.push(config.profiles[profile]);
			compiled_config.profiles[profile] = config.profiles[profile];
    }
}

// use hash to get current profile

function set_current_profile(id) {
	// set hashtag
	if ($.isNumeric(id) && id < compiled_config.profiles.length) {
		window.location.hash = compiled_config.profiles[id].id;
	}
	else if (compiled_config.profiles[id] != undefined) {
		window.location.hash = id;
	}
	else {
		window.location.hash = compiled_config.profiles[0].id;
	}
	$("#navbar-method li").removeClass("active");
	$(window.location.hash).addClass("active");
}

function get_current_profile() {
	set_current_profile(window.location.hash.slice(1));
	return window.location.hash.slice(1);
}

function refresh() {
	location.reload();
}

// Fill nav bar
navbar_templates = $("#template-navbar-method").html();
$("#navbar-method").html(Mustache.render(navbar_templates, compiled_config));
current_profile = get_current_profile();

// Construct input form
input_templates = $("#template-input-form").html();
$("#input-form").html(Mustache.render(input_templates, compiled_config.profiles[current_profile]));

console.log(config);
console.log(compiled_config);