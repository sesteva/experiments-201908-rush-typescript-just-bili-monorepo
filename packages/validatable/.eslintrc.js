const base = require('@renoirb/conventions-use-eslint')

const main = {
  ...base,
  rules: {
    ...base.rules,
    // TODO: Make this list smaller, not bigger
    // To try it out, comment one line, then run `rushx lint`.
    '@typescript-eslint/typedef': 'off',
  },
}

module.exports = main
