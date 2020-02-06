'use strict';

const ArgumentsParser = require('./cli-argv-parser');
const result = ArgumentsParser.parse(process.argv);
console.log(result);
