'use strict';

const ArgumentsParser = require('./cli-argv-parser');

const scheme = {
    file: String,
    force: Boolean,
    count: Number,
}

const args = ['node', 'demo.js', '--file', 'app.js', 'force', '--count', '20'];

const result = ArgumentsParser.parse(args, scheme);
console.log(result);
