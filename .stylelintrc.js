export default {
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  ignoreFiles: ['build/**/*', 'dist/**/*', 'node_modules/**/*'],
  rules: {
    'selector-class-pattern': null,
    'color-function-notation': 'modern',
    'plugin/declaration-block-no-ignored-properties': true,
    'no-duplicate-selectors': true,
    'scss/comment-no-empty': true,
    'custom-property-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'value-keyword-case': null,
    'selector-not-notation': null,
  },
};
