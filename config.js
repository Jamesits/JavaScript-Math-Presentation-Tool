var config = {
	"inputs": {
		"function": {
			"name": "Function",
			"type": "text",
			"placeholder": "Valid math expression f(x), assuming f(x) = 0"
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