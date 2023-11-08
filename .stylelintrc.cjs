module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be snake-case`,
      },
    ],
    'selector-id-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: (selector) =>
          `Expected id selector "${selector}" to be snake-case`,
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'prettier/prettier': true,
  },
};
