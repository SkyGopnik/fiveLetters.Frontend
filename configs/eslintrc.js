const generatePathGroup = (name) => {
  return [
    `/^${name}/`,
    `/.\\_${name}/`,
    `/.\\/${name}/`
  ];
};

// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "import-helpers",
    "@typescript-eslint",
    "unused-imports"
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-tag-spacing": 2,
    "no-extra-boolean-cast": "off",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "warn",
    "object-curly-spacing": ["error", "always"],
    "no-case-declarations": "off",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: true
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "react/react-in-jsx-scope": "off",
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/no-unescaped-entities": "off",
    "linebreak-style": ["error", "unix"],
    eqeqeq: ["error", "always"],
    "react-hooks/exhaustive-deps": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          ...generatePathGroup("components"),
          ...generatePathGroup("hooks"),
          ...generatePathGroup("functions"),
          ...generatePathGroup("utils"),
          ...generatePathGroup("assets"),
          ...generatePathGroup("types"),
          "parent",
          "sibling",
          "index"
        ],
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ],
    "eol-last": "error"
  }
};
