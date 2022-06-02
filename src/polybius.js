// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // cipher object used for encoding the message
  const encodeCipher = {
    'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22,
    'h': 32, 'i': 42, 'j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33,
    'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54,
    'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55, ' ': ' '
  }

  // cipher object used for decoding the message
  const decodeCipher = {
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g',
    32: 'h', 42: 'i/j', 52: 'k', 13: 'l', 23: 'm', 33: 'n',
    43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z', ' ': ' '
  }

  const _coder = (input, encode) => {
    if (encode === true) {
      /* Encoder Method */

      let code = ''

      // map passes a single letter to hasOwnProperty check and then either adds it the string or skips it
      input.split(/(.)/).filter(s => s).map(character => {
        if (encodeCipher.hasOwnProperty(character)) code = code + encodeCipher[character]
        else if (character === ' ') code = code + character
      })

      return code
    } else if (encode === false) {
      /* Decoder Method */

      // removing any empty spaces from the input
      const flattened = input.split(' ').join('')
      let code = ''
      
      //  map passes a single letter to hasOwnProperty check and then either adds it the string or skips it
      flattened.split(/(..)/).filter(s => s).map(character => {
        if (decodeCipher.hasOwnProperty(character)) code = code + decodeCipher[character]
      })
      
      const space = input.search(/\s/g) - 2
      // handholding the logic to ensure it does not add spaces to input that contained no spaces
      if (space > 0) {
        let codeArray = code.split('')
        codeArray.splice(space, 0, ' ')
        codeArray.join('')
        return codeArray.join('')
      }
      return code
    }
  }

  function polybius(input, encode = true) {
    let check = input.split(' ').join('')

      if (encode === false && check.length % 2 !== 0) return false
      else return _coder(input, encode)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };