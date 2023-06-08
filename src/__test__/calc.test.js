const Calculator = require('../components/calc/calc');

describe('Calculator Tests', () => {
  test('Addition of 2 numbers', () => {
    var result = Calculator.sum(1, 2);
    expect(result).toBe(3);
  });

  test('Subtraction of 2 numbers', () => {
    var result = Calculator.diff(10, 2);
    expect(result).toStrictEqual(8);
  });

  test('Multiplication of 2 numbers', () => {
    var result = Calculator.product(2, 8);
    expect(result).toBe(16);
  });

  test('Division of 2 numbers', () => {
    var result = Calculator.divide(24, 8);
    expect(result).toBe(3);
  });
});
