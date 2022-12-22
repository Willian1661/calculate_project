module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["eslint:recommended", "prettier"],
	"overrides": [],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"no-useless-call": "error",
        "no-useless-catch": "error",
		"no-lonely-if": "error",
		"no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
		"no-var": "warn",
		"no-multiple-empty-lines": "error",
		"eqeqeq": "error",
		"curly": "error",
		"eol-last": [
			"error", 
			"always"
		],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": "error",
        "semi-spacing": "error",
		"semi-style": [
            "error",
            "last"
        ]
	}
}
