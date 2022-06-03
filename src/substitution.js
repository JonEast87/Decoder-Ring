// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz',
      alphabetArray = alphabet.split('')
    let result = '',
      // .some is used to check for duplicates in the input alphabet
      duplicateFound = alphabetArray.some((currentValue, currentIndex) => alphabetArray.indexOf(currentValue) !== currentIndex)

    if (duplicateFound) return false

    input = input.toLowerCase().split('')

    input.forEach(ele => {
      if (ele === ' ') result += ' '
      // grab the index that the input element exists at in the english alphabet and saves that current element to the result string
      return (encode ? result += alphabet.charAt(alphabetString.indexOf(ele)) : result += alphabetString.charAt(alphabet.indexOf(ele)))
    })

    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };