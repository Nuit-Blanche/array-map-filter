const getJedisNames = require('../tests/filter-map2.js');

describe('map + filter - exercice 1', () => {

  test('getJedisNames', () => {
    expect(getJedisNames([
      { name: 'Yoda', side: 'light' },
      { name: 'Count Dooku', side: 'dark' },
      { name: 'Obiwan Kenobi', side: 'light' },
      { name: 'Mace Windu', side: 'light' },
      { name: 'Darth Sidious', side: 'dark' },
      { name: 'Darth Maul', side: 'dark' }
    ]))
    .toEqual(['Yoda', 'Obiwan Kenobi', 'Mace Windu']);
  });

});

