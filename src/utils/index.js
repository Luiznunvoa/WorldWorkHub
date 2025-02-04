/**
 * Converts a string in the format "/pattern/flags" into a regular regex expression.
 * @param {String} patternString - string with the regex partern
 * @returns {RegExp}
 */
export function stringToRegex(patternString) {
  const match = patternString.match(/^\/(.+)\/([a-z]*)$/); // Match the string against the regex format.

  if (!match) {
    console.error(`Warning: Invalid regex format: ${patternString}`);
    return null;
  }

  const [, pattern, flags] = match; // Destructure the matched groups: pattern and flags.
  return new RegExp(pattern, flags);
}
