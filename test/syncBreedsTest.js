const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');
const expectedDescBombay = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."

const expectedDescBalinese = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."

const expectedDescTiger = undefined
describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails('Bombay');
    assert.equal(bombay, expectedDescBombay)
  });
  it('returns breed details for the Balinese breed', () => {
    const balinese = breedDetails('Balinese');
    assert.equal(balinese, expectedDescBalinese)
  });
  it('returns undefined when breed details are unavailable', () => {
    const tiger = breedDetails('Tiger');
    assert.equal(tiger, expectedDescTiger)
  });

});
