import globals from 'globals';
import js from '@eslint/js'
import react from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import eslint from '@eslint/js';
import tsESlint from 'typescript-eslint';

export default tsESlint.config(
  eslint.configs.recommended,
  tsESlint.configs.recommended,
  js.configs.recommended,
  prettierConfig,
  {
    files: ['./src/**/*.{js,jsx,mjs,cjs,ts,tsx}', './*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
      }
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
      "indent": "error",
    },
  }
);