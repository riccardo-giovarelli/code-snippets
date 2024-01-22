/**
 * @function getFactorialOfNumber
 *
 * @description The function calculate the factorial of a number
 *
 * @param {number} x Input number
 * @returns {number} Factorial of x
 */
const getFactorialOfNumber = (x: number): number => (x > 1 ? x * getFactorialOfNumber(x - 1) : 1);

/**
 * getCharsOccurrenceInString working example:
 * https://codepen.io/riccardo-giovarelli/pen/oNVwmVP
 */
