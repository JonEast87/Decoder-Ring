// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz',
      alphabetArray = alphabet.split('')
    let result = '',
      duplicateFound = alphabetArray.some((currentValue, currentIndex) => alphabetArray.indexOf(currentValue) !== currentIndex)

    if (duplicateFound) return false

    input.toLowerCase().split('').map(letter => {
      if (input[letter] === ' ') result += ' '
      if (encode) {
        index = alphabetString.indexOf(input.charAt(letter))
        result += alphabet.charAt(index)
      } else {
        index = alphabet.indexOf(input.charAt(letter))
        result += alphabetString.charAt(index)
      }
    })

    // for (let i = 0; i < input.length; i++) {
    // }

    return result

  }

  return {
    substitution,
  };
})();

const output = substitutionModule.substitution('message', 'plmoknijbuhvygctfxrdzeswaq') // 'ykrrpik'
console.log(output)

module.exports = { substitution: substitutionModule.substitution };