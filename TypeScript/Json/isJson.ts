/**
 * @function isJson
 *
 * @description The function checks if a string is a JSON
 *
 * @param {string} str String to check
 * @returns {boolean} True if the provided string is a json, false otherwise
 */
export const isJson = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (_) {
    return false;
  }
  return true;
};
