const Potion = require('../lib/Potion');
const Enemy = require('../lib/Enemy');


test('get enemy name', ()=>{
    const enemy = new Enemy('Goblin','sword');
    expect(enemy.name).toBe('Goblin');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.weapon).toBe('sword');
    expect(enemy.potion).toEqual(expect.any(Object))
});



