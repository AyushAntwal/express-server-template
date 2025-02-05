import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
    ignores: ['node_modules', 'dist', 'build'],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'warn',
      'prettier/prettier': 'warn',
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
      ...eslintConfigPrettier.rules,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
