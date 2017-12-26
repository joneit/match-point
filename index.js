'use strict';

/**
 * @summary Find all pattern matches, return specified capture group for each.
 * @returns {string[]} An array containing all the pattern matches found in `string`.
 * The entire pattern match is returned unless the pattern contains one or more subgroups in which case the portion of the pattern matched by the last subgroup is returned unless `captureGroup` is defined.
 * @param {string} string - Text to search.
 * @param {string|RegExp} pattern - Search argument.
 * Don't use global flag on RegExp; it's unnecessary and suppresses submatches of capture groups.
 * @param {number} [captureGroup] - Iff defined, index of a specific capture group to return.
 */
module.exports = function(string, pattern, captureGroup) {
    var matches = [];

    for (var match, i = 0; (match = string.substr(i).match(pattern)); i += match.index + match[0].length) {
        matches.push(match[captureGroup === undefined ? match.length - 1 : captureGroup]);
    }

    return matches;
};
