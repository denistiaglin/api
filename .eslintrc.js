module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "semi": ["error", "never"],
    "no-console": "warn",
    "no-plusplus": "off",
    "no-confusing-arrow": "off",
    "implicit-arrow-linebreak": "off",
    "operator-linebreak": "off",
    "no-param-reassign": "off",
    "arrow-body-style": "off",
    "no-unneeded-ternary": "off",
    "consistent-return": "off",
    "function-paren-newline": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "max-classes-per-file": "off",
    "prefer-const": "off",
    "arrow-parens": "off",
    "comma-dangle": ["error", "always-multiline"],
    "curly": ["error", "all"],
    "no-mixed-operators": "error",
    "camelcase": "warn",
    "max-len": ["warn", { "code": 120 }],
    "dot-notation": "warn",
    "no-continue": "warn",
    "indent": ["warn", 2, {
      "SwitchCase": 1,
    }],
    "no-process-exit": "error",
    "no-nested-ternary": "off",
    "no-dupe-else-if": "error",
    "block-spacing": ["error", "never"],
    "no-spaced-func": "error",
    "object-curly-spacing": ["error", "always"],
    "eqeqeq": ["error", "always"],
    "no-trailing-spaces": ["error", {
      "ignoreComments": true,
    }],
  },
}
