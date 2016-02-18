module.exports = {
    "rules": {
        "indent": [
            2,
            2,
            {
          "SwitchCase": 1,
          "VariableDeclarator": { "var": 2, "let": 2, "const": 3}
         }
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "never"
        ],
        "no-console": 0
    },
    "env": {
        "es6": true,
        "node": true,
        // "browser": true,
        // "mocha": true
    },
    //"extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
};
