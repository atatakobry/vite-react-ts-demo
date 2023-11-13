module.exports = {
  '*.{ts,tsx}': 'eslint --fix',
  /* NOTE: stylelint may not fix all problems due to some bugs */
  '*.{css,scss}': 'stylelint --fix',
};
