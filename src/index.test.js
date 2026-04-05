import { calculator, capitalize } from "./index.js";
import { reverse } from "./index.js";

test('Capitalize the first character', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Reverse string', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('Calculator method add', () => {
    expect(calculator.add(3,4)).toBe(7);
});

test('Calculator method subtract', () => {
    expect(calculator.subtract(3, 4)).toBe(-1);
});

test('Calculator method multiply', () => {
    expect(calculator.multiply(3,4)).toBe(12);
});

test('Calculator method divide', () => {
    expect(calculator.divide(4,4)).toBe(1);
});