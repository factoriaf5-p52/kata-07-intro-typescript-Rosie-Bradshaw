import {calculateBmi} from '../src/bmiCalculator';

test('1+1=2', ()=>expect(1+1).toBe(2));

describe('calculateBmi', ()=>{
    test('calculateBMI should be a number', ()=>
    expect(typeof calculateBmi).toBe('number'))
})