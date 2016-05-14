module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": false
        }
    },
    "rules": {
        "indent": [
            2,
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "arrow-body-style": [
            "error",
            "always"
        ],
        "strict": [
            0,
            "never"
        ],
		"comma-dangle" : [
			"error",
			"never"
		],
		"max-len" : 0,
		"no-param-reassign" : 0,
        "no-console": [
            2,
            {
                allow: [
                    "info",
                    "error"
                ]
            }
        ]
    }
};
