/**
 * @function getCharsOccurrenceInString
 *
 * @description The function returns the number of occurrences of every character of a string
 *
 * @param {string} text Input string to parse
 * @returns {[key: string]: number} Count of multiple occurrences for the provided string
 */
const getCharsOccurrenceInString = (text: string): { [key: string]: number } => {
  const count = {};
  text.split('').forEach((char) => {
    count[char] = !count[char] ? 1 : count[char] + 1;
  });
  return count;
};
/**
 * getCharsOccurrenceInString working example:
 * https://codepen.io/riccardo-giovarelli/pen/poYwGLg
 */
