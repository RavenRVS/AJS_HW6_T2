import getSpecialAttacks from '../app';

test.each([
  ['with description', {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Нокаутирующий удар оглушает противника',
      },
    ],
  }, [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Нокаутирующий удар оглушает противника',
    },
  ]], ['without description', {
    name: 'Маг',
    type: 'Magician',
    health: 70,
    level: 5,
    attack: 30,
    defence: 20,
    special: [
      {
        id: 1,
        name: 'Фаербол',
        icon: 'http://...',
      },
      {
        id: 2,
        name: 'Замедление',
        icon: 'http://...',
      },
    ],
  }, [
    {
      id: 1,
      name: 'Фаербол',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 2,
      name: 'Замедление',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]],
])(
  ('should extract special attacks %s'),
  (option, character, expected) => {
    const result = getSpecialAttacks(character);
    expect(result).toEqual(expected);
  },
);
