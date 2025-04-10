import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use FlatCompat to handle plugins and configurations from older versions
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended
});

export default [
  // Ignore patterns
  { ignores: ['node_modules/**', 'dist/**', 'build/**', '.git/**', '**/*.js'] },
  
  // Base ESLint recommended rules
  eslint.configs.recommended,
  
  // TypeScript rules from typescript-eslint
  ...tseslint.configs.recommended,
  
  // Configure plugins
  {
    plugins: {
      'react-hooks': reactHooks,
      'import': importPlugin,
    }
  },
  
  // TypeScript-specific settings (applies to TS files only)
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'none', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowedNames: ['self', 'plugin'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    }
  },
  
  // General rules for all files
  {
    rules: {
      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }
      ],
      'comma-dangle': ['error', 'only-multiline'],
      'arrow-parens': ['error', 'as-needed'],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-prototype-builtins': 'off',
      'linebreak-style': ['error', 'unix'],
    }
  }
];