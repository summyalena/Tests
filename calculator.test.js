describe('calculates numbers', ()=>{
    test('adds numbers', ()=>{
        expect(add(1,2)).toBe(3);
    })
    test('subtract numbers', ()=>{
        expect(subtract(1,2)).toBe(-1);
    })
    test('multiply numbers', ()=>{
        expect(multiply(1,2)).toBe(2);
    })
})


function add(a,b) {
    return a + b
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}
