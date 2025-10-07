module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "react-app",
    "react-app/jest",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  rules: {
    // React specific rules
    "react/prop-types": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-key": "error",
    "react/no-unused-state": "warn",
    "react/no-direct-mutation-state": "error",

    // React Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // JavaScript best practices
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "error",
    "no-alert": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "no-duplicate-imports": "error",

    // Code style
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],

    // Import rules
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],

    // Accessibility rules
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
