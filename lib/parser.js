'use strict';

const applyScheme = (argv, scheme) => {
  const options = {};
  for (const key in argv) {
    const cleanedKey = key.replace(/-/g, '');
    options[cleanedKey] = argv[key];
  }
  for (const key in scheme) {
    const constructor = scheme[key];
    const value = options[key];
    if (value) {
      scheme[key] = constructor(value);
    } else {
      scheme[key] = undefined;
    }
  }
  return scheme;
}

const parse = (argv, scheme = null) => {
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
  return scheme ? applyScheme(args, scheme) : args;
}

module.exports = { parse };
