import assert from "assert";
import {filterValues,generateFibonacci,isPrime,isEven,hasOddDigit,MAX_SAFE_INT} from "../src/app.mjs";
it('isEven returns true for 2* any 10 random integers',() => {
    for(let i=0;i<10;i++){
        const value = Math.round(Math.random()*0.5*MAX_SAFE_INT);
        assert.equal(isEven(2*value),true);
    }
});
it('isEven returns false for any 2* any 10 random integers + 1',() => {
    for(let i=0;i<10;i++){
        const value = Math.round(Math.random()*0.5*MAX_SAFE_INT);
        assert.equal(isEven(2*value+1),false);
    }
});
it('isPrime returns true for [1,2,3,5,7,11,13]',()=>{
    [1,2,3,5,7,11,13].forEach(value => {
        assert.equal(isPrime(value),true);
    })
});
it('isPrime returns false for 2* any 10 random integers > 1',() => {
    for(let i=0;i<10;i++){
        const value = 1+Math.round(Math.random()*0.5*MAX_SAFE_INT);
        assert.equal(isPrime(2*value),false);
    }
});
it('hasOddDigit returns true for [1,3,5,7,9,12,14,16,23,34,55]',()=>{
    [1,3,5,7,9,12,14,16,23,34,55].forEach(value => {
        assert.equal(hasOddDigit(value),true);
    })
});
it('hasOddDigit returns false for [2,4,8,24,46,88]',()=>{
    [2,4,8,24,46,88].forEach(value => {
        assert.equal(hasOddDigit(value),false);
    })
});
let fibonacci = [];
it('generateFibonacci does not throw errors',()=>{
    assert.doesNotThrow(()=>{
        fibonacci = generateFibonacci();
    })
});
it('generateFibonacci contains > 0 results',()=>{
    assert.equal(fibonacci.length > 0,true);
});
it('generateFibonacci items have value field with typeof == number',() => {
    const hasValueField = (item) => {
        return item.hasOwnProperty('value') && typeof item.value === 'number';
    };
    fibonacci.forEach((item)=>{
        assert.equal(hasValueField(item),true)
    });
});
it('generateFibonnaci contains values between 1 and MAX_SAFE_INT',()=>{
    const between = (value) => value >= 1 && value <= MAX_SAFE_INT;
    fibonacci.forEach(({value})=>{
        assert.equal(between(value),true)
    });
});
it('generateFibonacci items have boolean fields [even,prime,oddDigit]',()=>{
    const hasBooleanField = (item,field) => {
        return item.hasOwnProperty(field) && typeof item[field] === 'boolean';
    };
    fibonacci.forEach((item)=>{
        assert.equal(hasBooleanField(item,'even'),true);
        assert.equal(hasBooleanField(item,'prime'),true);
        assert.equal(hasBooleanField(item,'oddDigit'),true);
    });
});
it('generateFibonacci items have prime field equal to isPrime(value)',()=>{
    fibonacci.forEach(({value,prime})=>{
        assert.equal(isPrime(value),prime);
    });
});
it('generateFibonacci items have even field equal to isEven(value)',()=>{
    fibonacci.forEach(({value,even})=>{
        assert.equal(isEven(value),even);
    });
});
it('generateFibonacci items have oddDigit field equal to hasOddDigit(value)',()=>{
    fibonacci.forEach(({value,oddDigit})=>{
        assert.equal(hasOddDigit(value),oddDigit);
    });
});