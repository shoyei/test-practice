import {capitalizeString, reverseString, calculator, caesar, arrayAnalysis} from './index'

test('Capitalize String', () => {
  expect(capitalizeString('hello world')).toBe('Hello world');
});

test('Reverse String', () => {
    expect(reverseString('Hello world')).toBe('dlrow olleH')
})

test('Calculator Add', () => {
    expect(
        calculator.add(1, 1)
    ).toBe(2)
})

test('Calculator Subtract', () => {
    expect(
        calculator.subtract(1, 1)
    ).toBe(0)
})

test('Calculator Multiply', () => {
    expect(
        calculator.multiply(2, 2)
    ).toBe(4)
})

test('Calculator Divide', () => {
    expect(
        calculator.divide(2, 2)
    ).toBe(1)
})

test('Caesar Cypher - positive shift', () => {
    expect(
        caesar('.He llOz!', 5)
    ).toBe('.Mj qqTe!')
})

test('Caesar Cypher - negative shift', () => {
    expect(
        caesar('.He llO!', -5)
    ).toBe('.Cz ggJ!')
})

test('Array Analysis', () => {
    expect(arrayAnalysis([1,2,3,4])).toStrictEqual(
        {
            average: 2.5,
            min: 1,
            max: 4,
            length: 4
        }
    )
})