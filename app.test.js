import { capitalize, reverseString } from "./app";

test('test capitalize function', () => {
  expect(capitalize("marie")).toBe("Marie");
});

test('test reverseString function', () => {
  expect(reverseString("Marie")).toBe("eiraM");
});