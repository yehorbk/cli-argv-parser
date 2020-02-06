'use strict';

const ArgumentsParser = require('../lib/parser');

const withoutScheme = {
    correctResult: { '--key': 'k', '-w': '1000', 'root': true, '--q': 'val', '-x': '3' },
    args: ['data', 'data', '--key', 'k', '-w', '1000', 'root', '--q', 'val', '-x', '3'],
}

const withScheme = {
    correctResult: { key: 'k', w: 1000, root: true, 'q': 'val', x: 3 },
    args: ['data', 'data', '--key', 'k', '-w', '1000', 'root', '--q', 'val', '-x', '3'],
    scheme: { key: String, w: Number, root: Boolean, q: String, x: Number },
}

const validate = (test, result) => {
    const { correctResult } = test;
    console.log(correctResult);
    console.log(result);
    for (const key in result) {
        if (!correctResult[key]) {
            throw new Error(`There is no to be ${key}`);
        }
        if (correctResult[key] !== result[key]) {
            throw new Error(`The values are different: ${correctResult[key]} !== ${result[key]}`)
        }
    }
}

validate(withoutScheme, ArgumentsParser.parse(withoutScheme.args));
validate(withScheme, ArgumentsParser.parse(withScheme.args, withScheme.scheme));
