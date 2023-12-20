import Validator from '../user';

test('letters', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user');
  expect(result).toBe(true);
});

test('number in begin', () => {
  const validator = new Validator();
  const result = validator.validateUsername('1username');
  expect(result).toBe(false);
});

test('number in the end', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user9');
  expect(result).toBe(false);
});

test('numbers in both sides', () => {
  const validator = new Validator();
  const result = validator.validateUsername('1username2');
  expect(result).toBe(false);
});

test('minus in begin', () => {
  const validator = new Validator();
  const result = validator.validateUsername('-user');
  expect(result).toBe(false);
});

test('_ in begin', () => {
  const validator = new Validator();
  const result = validator.validateUsername('_user');
  expect(result).toBe(false);
});

test('3 digits', () => {
  const validator = new Validator();
  const result = validator.validateUsername('QWERTY123a');
  expect(result).toBe(true);
});

test('4 digits', () => {
  const validator = new Validator();
  const result = validator.validateUsername('QWERTY1234Q');
  expect(result).toBe(false);
});
