/**
 * Joins an array of words into a single string with proper formatting.
 * - For an empty array, returns an empty string.
 * - For one word, returns the word itself.
 * - For two words, joins them with "and".
 * - For three or more words, joins all but the last with commas, and appends "and" before the last word.
 *
 * @param {string[]} words - Array of words to join.
 * @param {string} and - The and in the text
 * @param {string} comma - The comma in the text
 * @returns {string} - Properly formatted string.
 */
function joinWords(words, and = "and", comma =", ") {
  if (words.length === 0) return "";
  if (words.length === 1) return words[0];
  if (words.length === 2) return `${words[0]} ${and} ${words[1]}`;

  // For three or more words
  const allButLast = words.slice(0, -1).join(comma);
  const lastWord = words[words.length - 1];
  return `${allButLast}${comma}${and} ${lastWord}`;
}

module.exports = joinWords;
