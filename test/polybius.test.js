const { expect } = require('chai')
const { polybius } = require('../src/polybius')

// When encoding, it translates the letters i and j to 42.
describe('polybius() tests written by Jonathan', () => {
  describe('encode', () => {
    it('i/j are translated to 42', () => {
      expect(polybius('kitten jitten')).to.equal('524244445133 424244445133')
    })
  })

  // When decoding, it translates 42 to (i/j).
  describe('decode', () => {
    it ('42 is translated to i/j', () => {
      expect(polybius('524244445133 424244445133', false)).to.include('i')
      expect(polybius('524244445133 424244445133', false)).to.include('j')
    })
  })

  // It maintains spaces in the message, before and after encoding or decoding.
  describe('encode / decode', () => {
    it('maintans spaces before and after', () => {
      expect(polybius('kitten jitten')).to.equal('524244445133 424244445133')
    })

    // It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it('ignore capital letters', () => {
      expect(polybius('kitten jitten')).to.equal('524244445133 424244445133')
      expect(polybius('Kitten jitten')).to.equal('524244445133 424244445133')
    })
  })
})