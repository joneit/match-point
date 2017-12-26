Find all pattern matches and return the specified submatch for each

### Synposis

```js
function(string, regex, captureGroup)
```

### Usage

```js
var match = require('match-point');
var string = 'Alice A. Adams, MD, Bob B. Baker, BA, Dr. Charlie C. Chase, PhD';
match(string, / ([A-Z])\. /); // ['A', 'B', 'C']
match(string, / ([A-Z])\. \w+, (MD|MS|PhD)/); // ['MD', 'PhD']
match(string, / ([A-Z])\. \w+, (MD|MS|PhD)/, 1); // ['A', 'C']
```

### Description

Find all pattern matches in `string` matching `regex` and return in an array.

For each element:
* When there are no capture groups in the regex, the entire pattern match is returned.
* When there are capture groups in the regex:
   * When `captureGroup` is undefined, the last submatch is returned.
   * When `captureGroup` is defined, it indicates which submatch to return (`0` being the entire match, _etc._, per [`String.prototype.match`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/match) results).

### Caveats

Don't use global flag in your regex. It's unnecessary and suppresses submatches of capture groups.