var config = {
	"inputs": {
		// 所有可能出现的输入参数
		"function": {
			"name": "函数表达式",
			"type": "text",
			"placeholder": "表达式 f(x)=0 与所求方程等价"
		},
		"directive": {
			"name": "导数",
			"type": "text",
			"placeholder": "导函数 f'(x)"
		},
		"precision": {
			"name": "精度",
			"type": "number",
			"placeholder": "How precise you want it to be"
		},
		"initial": {
			"name": "迭代初值",
			"type": "number",
			"placeholder": "The very first value for iteration"
		},
		"min": {
			"name": "解区间下限",
			"type": "number",
			"placeholder": "The lowest limit of solution range"
		},
		"max": {
			"name": "解区间上限",
			"type": "number",
			"placeholder": "The highest limit of solution range"
		},
		"maxi": {
			"name": "最大迭代次数",
			"type": "number",
			"placeholder": "How much time you want to iterate if didn't found a solution"
		},
		"insertpoint": {
			"name": "插值点",
			"type": "number",
			"placeholder": "Where you want to get a y"
		}
	},
	"profiles": {
		// 方法
		"bisection": {
			"name": "二分法",
			"input": ["function", "precision", "min", "max"]
		},
		"iteration": {
			"name": "迭代法",
			"input": ["function", "precision", "initial", "maxi"]
		},
		"newton": {
			"name": "牛顿法",
			"input": ["function", "directive", "precision", "initial", "maxi"]
		},
		"hermite": {
			"name": "埃尔米特插值法",
			"input": ["insertpoint"],
			"extendeddata": {
				"name": "插值点，插值点函数值和导数值",
				"placeholder": "x\t\tf(x)\t\tf'(x)"
			}
		},
		"legrange": {
			"name": "拉格朗日插值法",
			"input": ["insertpoint"],
			"extendeddata": {
				"name": "插值点和插值点函数值",
				"placeholder": "x\t\tf(x)"
			}
		},
		"newtoninsert": {
			"name": "牛顿插值法",
			"input": ["insertpoint"],
			"extendeddata": {
				"name": "插值点和插值点函数值",
				"placeholder": "x\t\tf(x)"
			}
		}
	}
};