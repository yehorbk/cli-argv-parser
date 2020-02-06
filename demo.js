'use strict';

const ArgumentsParser = require('./cli-argv-parser');
const result = ArgumentsParser.parse(process.argv, { k: String, w: Number, tr: Boolean, q: String});
console.log(result);
