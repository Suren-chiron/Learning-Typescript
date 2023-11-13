module.exports = {
   env: { browser: true, es6: true },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
   ],
   ignorePatterns: ['.eslintrc.cjs', '*.html', '*.css'],
   plugins: ['@typescript-eslint', 'prettier'],
   rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'off',
      'linebreak-style': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/semi': 'error',
   },
};
