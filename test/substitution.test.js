const { expect } = require('chai')
const { substitution } = require('../src/substitution')
 
describe('substitution() tests written by Jonathan', () => {
  describe('decode', () => {
    // It correctly translates the given phrase, based on the alphabet given to the function.
    it('correctly translates the phrase based on the alphabet input', () => {
      expect(substitution('ykrrpik', 'plmoknijbuhvygctfxrdzeswaq', false)).to.equal('message')
    })

  // It maintains spaces in the message, before and after encoding or decoding.
    it('maintains spaces before and after', () => {
      expect(substitution('yp ysii.rs', '.waeszrdxtfcygvuhbijnokmpl', false)).to.equal('my message')
    })
  })

  describe('encode / decode', () => {
    // It returns false if the given alphabet isn't exactly 26 characters long.
    it('more than 26 characters long returns false', () => {
      expect(substitution('hello', 'abcdefghijklmnopqrstuvwxyz1')).to.be.false
    })

    // It returns false if there are any duplicate characters in the given alphabet.
    it('duplicate characters from input alphabet returns false', () => {
      expect(substitution('hello', 'abcabcabcabcabcabcabcabcab')).to.be.false
    })

    // It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it('capital letters are ignored', () => {
      expect(substitution('Hello', 'plmoknijbuhvygctfxrdzeswaq')).to.equal('jkvvc')
    })
  })
})