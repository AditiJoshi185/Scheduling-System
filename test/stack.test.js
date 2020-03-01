const Stack = require('./../lib/stack');

let sampleStack= new Stack();

test('Test 1 : Stack Test', () => {
    sampleStack.push(1);
    expect(sampleStack.peek()).toBe(1); 
    expect(sampleStack.length()).toBe(1); 
    expect(sampleStack.pop()).toBe(1); 
});