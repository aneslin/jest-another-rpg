const Potion = require('../lib/Potion');

jest.mock('../lib/__mock__/Potion');
const Player = require('../lib/Player');




console.log(new Potion());

test('create a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect.arrayContaining([expect.any(Object)])

    

});
