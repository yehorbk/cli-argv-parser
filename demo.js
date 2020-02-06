'use strict';

const ArgumentsParser = require('./cli-argv-parser');
const result = ArgumentsParser.parse(process.argv, { k: String, w: Number, tr: Boolean, q: String, x: String});
console.log(result);
