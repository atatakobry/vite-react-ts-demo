module.exports = {
  '*.{ts,tsx}': 'eslint --report-unused-disable-directives --max-warnings 0 --fix',
  /* NOTE: stylelint may not fix all problems due to some bugs */
  '*.{css,scss}': 'stylelint --fix',
};
