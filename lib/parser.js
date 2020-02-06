'use strict';

const parse = argv => {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const key = argv[i];
    const value = argv[i + 1];
    args[key] = value;
    i += 1;
  }
  return args;
}

module.exports = { parse };