/// <reference path="../../typings/mustache/mustache.d.ts"/>
// auto fix config
var compiled_config = {
	"inputs": [],
	"navbar": [],
	"profiles": {}
};

for (var item in config.inputs) {
	if(config.inputs.hasOwnProperty(item)){
            if (config.inputs[item].id == undefined) {
				config.inputs[item].id = item;
			}
			compiled_config.inputs.push(config.inputs[item]);
    }
}

for (var profile in config.profiles) {
	if(config.profiles.hasOwnProperty(profile)){
            if (config.profiles[profile].id == undefined) {
				config.profiles[profile].id = profile;
			}
			config.profiles[profile].form = [];
			for (var item in config.profiles[profile].input) {
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
		window.location.hash = compiled_config.navbar[0].id;
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

function run_file(){
	$("#run").attr("disabled", "disabled");
	execute_prog();
	$("#run").removeAttr("disabled");
	$("#dresult").removeClass("hidden");
}

// Fill nav bar
var navbar_templates = $("#template-navbar-method").html();
$("#navbar-method").html(Mustache.render(navbar_templates, compiled_config));
var current_profile = get_current_profile();

// load editor
$("#editor").attr("src", "editor.html#" + current_profile);

// Construct input form
var input_templates = $("#template-input-form").html();
$("#input-form").html(Mustache.render(input_templates, compiled_config.profiles[current_profile]));
if (compiled_config.profiles[current_profile].extendeddata != undefined) {
	$("#lextended-data").text(compiled_config.profiles[current_profile].extendeddata.name + ": ");
	$("#extended-data").attr("placeholder", compiled_config.profiles[current_profile].extendeddata.placeholder);
	$("#dextended-data").removeClass("hidden");
}

console.log(config);
console.log(compiled_config);

$("#run").removeAttr("disabled");