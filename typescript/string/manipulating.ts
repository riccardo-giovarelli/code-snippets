/**
 * @function capitalizeEachWordsInString
 *
 * @description The function capitalizes each words in a string
 *
 * @param {string} sentence String to capitalize
 * @return {string} Capitalized string
 */
const capitalizeEachWordsInString = (sentence: string): string =>
  sentence
    .split(' ')
    .map((word: string) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
/**
 * capitalizeEachWordsInString working example:
 * https://codepen.io/riccardo-giovarelli/pen/oNVwJyY
 */

/**
 * @function fillZero
 *
 * @description Fill a number with zeros
 *
 * @param {number} width The final length of the number including the zeros
 * @param {string} number Number to fill with zeros
 * @param {boolean} back Position of zeros. If true after the original number, before otherwise.
 * @returns {string} The original number filled with zeros
 */
const fillZero = (width: number, number: string, back: boolean = false): string => {
  const zerosNeeded = width - number.length >= 0 ? width - number.length : 0;
  const zerosString = [...Array(zerosNeeded)].map((_) => '0').join('');
  return back ? number + zerosString : zerosString + number;
};
/**
 * fillZero working example:
 * https://codepen.io/riccardo-giovarelli/pen/rNRwPVx
 */

/**
 * @function simplifyString
 *
 * @description The function simplifies and clean a text
 *
 * @param {string} text Text to simplify
 * @returns {string} Text simplified and cleaned
 */
const simplifyString = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
/**
 * simplifyString working example:
 * https://codepen.io/riccardo-giovarelli/pen/zYbzedZ
 */
