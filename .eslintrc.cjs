module.exports = {
   env: { browser: true, es6: true },
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
   ignorePatterns: ['.eslintrc.cjs', '*.html', '*.css'],
   plugins: ['@typescript-eslint', 'prettier'], 
   rules: {
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'off',
      'linebreak-style': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/semi': 'error',
      /// delete these rules
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-inner-declarations': 'off',
   },
};
