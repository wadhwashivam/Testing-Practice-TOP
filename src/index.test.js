import { analyzeArray, calculator, capitalize } from "./index.js";
import { reverse } from "./index.js";

import { caesarCipher } from "./index.js";

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

test('caesarCipher wrapping from z to a', () => {
    expect(caesarCipher('xyz',3)).toBe('abc');
})

test('caesarCipher case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('caesarCipher punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('caesarCipher shift check', () => {
    expect(caesarCipher('M@n', 5)).toBe('R@s');
})

test('caesarCipher negative shift', () => {
    expect(caesarCipher('abc', -1)).toBe('zab');
})

test('Analyze Array', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length:6
    });
});