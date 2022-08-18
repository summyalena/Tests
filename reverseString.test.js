const reverse = require('./reverseString')

test('reverse this string', ()=>{
    expect(reverse('Hello boy')).toBe('yob olleH');
})