const stringLength = require('./index')

test('characters of string', ()=>{
    expect(()=> stringLength('HAPPINESSYOU')).toThrow(Error);
})