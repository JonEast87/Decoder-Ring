// Write your tests here!
const { expect } = require('chai')
const { caesar } = require('../src/caesar')

// It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
describe('caesar() tests written by Jonathan', () => {
  describe('shift value is out of bounds', () => {
    it('should return false if the shift is 0', () => {
      expect(caesar('green kitten', 0)).to.be.false
    })

    it('should return false if the shift is less than -25', () => {
      expect(caesar('green kitten', -26)).to.be.false
    })

    it('should return false if the shift is greater than 25', () => {
      expect(caesar('green kitten', 26)).to.be.false
    })

    it('should return false if the shift is nonexistent', () => {
      expect(caesar('green kitten')).to.be.false
    })
  })

  // It ignores capital letters. (For example, the results of A Message and a message should be the same.)
  describe('letter capitalization does not matter', () => {
    it('should ignore capital letters', () => {
      expect(caesar('green kitten', -1)).to.equal('fqddm jhssdm')
    })
  })

  // When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
  describe('when shift reaches end of the alphabet function should wrap it to the other end', () => {
    it('should wrap to the other side of the alphabet when necessary', () => {
      expect(caesar('green kitten', 24)).to.be.equal('epccl igrrcl')
    })
  })
  
  // It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
  describe('spaces and nonalphabetic symbols are maintained', () => {
    it('should maintain symbols and spaces', () => {
      expect(caesar('@green kitten!', -1)).to.be.equal('@fqddm jhssdm!')
    })
  })
})