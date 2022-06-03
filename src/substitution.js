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
      //
      duplicateFound = alphabetArray.some((currentValue, currentIndex) => alphabetArray.indexOf(currentValue) !== currentIndex)

    if (duplicateFound) return false

    input = input.toLowerCase()
    //
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') result += ' '
      if (encode) {
        //
        index = alphabetString.indexOf(input.charAt(i))
        //
        result += alphabet.charAt(index)
      } else {
        index = alphabet.indexOf(input.charAt(i))
        result += alphabetString.charAt(index)
      }
    }

    return result

  }

  return {
    substitution,
  };
})();

const output = substitutionModule.substitution('ykrrpik', 'plmoknijbuhvygctfxrdzeswaq', false) // 'ykrrpik'
console.log(output)

module.exports = { substitution: substitutionModule.substitution };