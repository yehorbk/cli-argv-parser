'use strict';

const parse = argv => {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const key = argv[i];
    let value = undefined;
    if (key.includes('-')) {
        value = argv[i + 1];
        i += 1;
    } else {
        value = true;
    }
    args[key] = value;
  }
  return args;
}

module.exports = { parse };
