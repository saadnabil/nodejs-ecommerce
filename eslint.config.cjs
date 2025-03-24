module.exports = [
  {
    ignores: ['node_modules'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs', // 👈 Allows CommonJS
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'eqeqeq': 'error',             // ❌ Error if using "==" instead of "==="
      'semi': ['error', 'always'],   // ❌ Error if missing semicolon
      'quotes': ['warn', 'single'],  // 🔹 Warning if not using single quotes
    },
  },
];