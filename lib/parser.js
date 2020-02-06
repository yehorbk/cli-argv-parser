'use strict';

const applyScheme = (argv, scheme) => {
  const options = {};
  for (const key in argv) {
    const cleanedKey = key.replace(/-/g, '');
    options[cleanedKey] = argv[key];
  }
  for (const key in scheme) {
    const value = options[key];
    if (value) {
      scheme[key] = value;
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

/*

/*let typeIdentifier = '';
    if (scheme[key] === Boolean) {
      typeIdentifier = '';
    } else {
      typeIdentifier = '-';
    }
    const value = args[typeIdentifier + key];*/

    /*args = args.map(value => {
        if (value.includes('-')) {
            value = value.replace(/-/g, '');
        }
        return value;
    });*/