// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const coder = (encodeOrdecode) => encodeOrdecode === true ? 1 : -1

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false

    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'],
      codeArray = new Array()

      // character is from map and represents the current input array
    input.toLowerCase().split('').map(character => {

      // letter is from find and represents the current lettter from the alphabet array
      if (alphabet.find(letter => letter === character)) {
        let indexPosition = alphabet.indexOf(character) + (shift * coder(encode))

        if (indexPosition > 25) indexPosition = indexPosition - 26
        else if (indexPosition < 0) indexPosition = indexPosition + 26

        let characterPosition = alphabet.join('').charAt(indexPosition)
        codeArray.push(characterPosition)

      } else if (character === ' ' || typeof character !== '') {
        codeArray.push(character)
      }
    })

    return codeArray.join('')
  }

  return {
    caesar,
  };
})();

const output = caesarModule.caesar("zebra magazine", -3)
console.log(output)

module.exports = { caesar: caesarModule.caesar };