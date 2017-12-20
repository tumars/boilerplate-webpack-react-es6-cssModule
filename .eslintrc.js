module.exports = {
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "log", "info"]
        }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/prop-types": [0]
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"] 
};