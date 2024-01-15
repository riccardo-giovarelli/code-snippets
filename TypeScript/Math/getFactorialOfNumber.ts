/**
 * @function getFactorialOfNumber
 *
 * @description The function calculate the factorial of a number
 *
 * @param {number} x Input number
 * @returns {number} Factorial of x
 */
export const getFactorialOfNumber = (x: number): number => (x > 1 ? x * getFactorialOfNumber(x - 1) : 1);
