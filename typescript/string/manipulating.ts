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
 * @function capitalizeEachWordsInSentence
 *
 * @description The function capitalizes each words in a sentence
 *
 * @param {string} sentence Sentence to capitalize
 * @return {string} Capitalized sentence
 */
const capitalizeEachWordsInSentence = (sentence: string): string =>
  sentence
    .split(' ')
    .map((word: string) => word[0].toUpperCase() + word.substring(1))
    .join(' ');

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
const fillZero = (width: number, number: string, back: boolean = false) => {
  const zerosNeeded = width - number.length >= 0 ? width - number.length : 0;
  const zerosString = [...Array(zerosNeeded)].map((_) => '0').join('');
  return back ? number + zerosString : zerosString + number;
};
