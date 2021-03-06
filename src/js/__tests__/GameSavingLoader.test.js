import GameSavingLoader from '../GameSavingLoader';

describe('GameSavingLoader:', () => {
  describe('load method:', () => {
    const result = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    };

    test('should return value async', async () => {
      const saving = await GameSavingLoader.load();
      expect(saving).toMatchObject(result);
    });
  });
});
