const boardManager = require('./boards');

beforeEach(() => {
    boardManager.create({ name: "Lateral", w: 2, h: 1, d: 1 });
    boardManager.create({ name: "Superior", w: 5, h: 1, d: 10 });
    boardManager.create({ name: "Bottom", w: 5, h: 1, d: 10 });

});

test('Check if beforEach Run', () => {
    expect(boardManager.get().length).toBe(3)
});
