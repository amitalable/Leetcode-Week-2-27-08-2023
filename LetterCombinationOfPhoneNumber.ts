//https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/

const digitToLetters = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const result: string[] = [];

  function backtrack(combination: string, nextDigits: string) {
    if (nextDigits.length === 0) {
      result.push(combination);
      return;
    }

    const currentDigit = nextDigits[0];
    const letters: string[] = digitToLetters[currentDigit];

    for (const letter of letters) {
      backtrack(combination + letter, nextDigits.slice(1));
    }
  }

  backtrack("", digits);

  return result;
}
