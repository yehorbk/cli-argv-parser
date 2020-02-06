# Command Line Argumets Parser
A library that allows to parse command line arguments into hash-table or object by scheme.
# How to use
You able to put only arguments array to parser and it will be return a hash-table (key-value).
But if you want to parse arguments into object - use template scheme with keys and required types. 
## Scheme:
```
const scheme = {
    file: String,
    force: Boolean,
    count: Number,
}
```
The template is `key`: `type`. Parser will try to convert argument into required type. By default single values will be always parsed into `Boolean` value.
## Example of result:
- Without scheme: `{ '--file': 'app.js', force: true, '--count': '20' }`
- With scheme: `{ file: 'app.js', force: true, count: 20 }`
# Author
**Yehor Bublyk**: [GitHub](https://github.com/yehorbk) • [Twitter](https://twitter.com/thisisyehorbk)
