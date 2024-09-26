import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray} from "./app";

test('test capitalize function', () => {
  expect(capitalize("marie")).toBe("Marie");
});

test('test reverseString function', () => {
  expect(reverseString("Marie")).toBe("eiraM");
});

test('test Calculator class', () => {
  const calc = new Calculator();
  expect(calc.add(1, 3)).toBe(4);
  expect(calc.subtract(3, 1)).toBe(2);
  expect(calc.divide(4, 2)).toBe(2);
  expect(calc.multiply(5, 5)).toBe(25);
});

test('test caesarCipher function', () => {
  expect(caesarCipher('HeLLo', 3)).toBe("KhOOr");
  expect(caesarCipher('xyz', 3)).toBe("abc");
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
});

test('test analyzeArray fucntion', () => {
  const object = analyzeArray([1,8,3,4,2,6]);

  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
})