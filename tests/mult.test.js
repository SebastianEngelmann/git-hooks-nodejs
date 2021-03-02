const mult = require('../src/mult')

it('should return correct multiplication', () => {
    const result = mult(3, 5)
    expect(result).toBe(15)
})