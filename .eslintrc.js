module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "shared-node-browser": true,
    "mocha": true
  },
  "globals": {
    "sinon": true,
    "expect": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
  ],
  "rules": {

    // manually-enabled rules

    "prefer-const": ["error"],

    "eqeqeq": [
      "error",
      "smart",
    ],

    "semi": [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": true
      }
    ],
    "semi-spacing": "off",
    "no-extra-parens": [
      "error",
      "all",
      {
        "returnAssign": false,
        "nestedBinaryExpressions": false
      }
    ],
    "eol-last": ["error", "always"],
    "max-len": [
      "error",
      {
        "code": 110,
        "ignoreComments": false,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "valid-jsdoc": [
      "error",
      {
        "requireReturn": false,
        "requireParamDescription": false,
        "requireReturnDescription": false
      }
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "no-unneeded-ternary": "error",
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "no-var": "error",


    // enabled by wizard

    "accessor-pairs": "error",
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "error",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "generator-star-spacing": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-match": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-directive": "error",
    "max-depth": "error",
    "max-nested-callbacks": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": [
      "error",
      {
        "boolean": false,
        "number": false,
        "string": false
      }
    ],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": [
      "error",
      "functions"
    ],
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-mixed-requires": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-negated-in-lhs": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-template-curly-in-string": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-void": "error",
    "no-with": "error",
    "operator-assignment": [
      "error",
      "always"
    ],
    "prefer-numeric-literals": "error",
    "prefer-spread": "error",
    "radix": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "strict": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "unicode-bom": [
      "error",
      "never"
    ],
    "yield-star-spacing": "error",
    "yoda": [
      "error",
      "never"
    ],
    "no-shadow": [
      "error",
      {
        "builtinGlobals": true,
        "hoist": "functions"
      }
    ],
    "array-callback-return": "error",
    "curly": "error",

    // disabled rules

    "array-bracket-spacing": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-scoped-var": "off",
    "block-spacing": "off",
    "callback-return": "off",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline"
      }
    ],
    "comma-spacing": "off",
    "consistent-return": "off",
    "consistent-this": "off",
    "default-case": "off",
    "dot-notation": "off",
    "func-style": "off",
    "guard-for-in": "off",
    "id-length": "off",
    "indent": "off",
    "init-declarations": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "lines-around-comment": "off",
    "max-lines": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-parens": "off",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-duplicate-imports": "off",
    "no-else-return": "off",
    "no-empty-function": "off",
    "no-eq-null": "off",
    "no-inline-comments": "off",
    "no-invalid-this": "off",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-prototype-builtins": "off",
    "no-script-url": "off",
    "no-sequences": "off",
    "no-tabs": "off",
    "no-ternary": "off",
    "no-throw-literal": "off",
    "no-trailing-spaces": "off",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "no-useless-escape": "off",
    "no-useless-return": "off",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-reflect": "off",
    "prefer-rest-params": "off",
    "prefer-template": "off",
    "quote-props": "off",
    "require-jsdoc": "off",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "spaced-comment": "off",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "wrap-regex": "off"
  }
};
