import globals from 'globals';
import react from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import eslint from '@eslint/js';
import tsESlint from 'typescript-eslint';

export default tsESlint.config(
  eslint.configs.recommended,
  tsESlint.configs.recommended,
  prettierConfig,
  {
    files: ['./src/**/*.{js,jsx,mjs,cjs,ts,tsx}', './*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'indent': 'error',
      '@typescript-eslint/no-unused-vars': ['error', {
        'vars': 'all', // Check all variables
        'varsIgnorePattern': '^_', // Ignore variables that start with "_"
        'args': 'after-used', // Check arguments after the last used one
        'argsIgnorePattern': '^_', // Ignore arguments that start with "_"
        'ignoreRestSiblings': true, // Ignore unused variables from destructuring
      }],
    },
  },
);