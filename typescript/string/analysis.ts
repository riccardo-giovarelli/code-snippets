/**
 * @function getCharsOccurrenceInString
 *
 * @description The function return the number of occurrences of a character in a string
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
