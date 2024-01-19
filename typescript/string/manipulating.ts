/**
 * @function simplifyString
 *
 * @description The function simplifies and clean a text
 *
 * @param {string} text Text to simplify
 * @returns {string} Text simplified and cleaned
 */
export const simplifyString = (text: string): string =>
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
export const capitalizeEachWordsInSentence = (sentence: string): string =>
  sentence.split(" ").map((word: string) =>
    word[0].toUpperCase() + word.substring(1)
  ).join(" ");
