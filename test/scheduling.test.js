const scheduling = require('./../lib/scheduling').checkDependency;

test('Test 1 ', () => {
    expect(scheduling([], [])).toEqual([]);
});

test('Test 2 ', () => {
    expect(scheduling(['a', 'b'], [])).toEqual(['a', 'b']);
});

test('Test 3 ', () => {
    expect(scheduling(['a', 'b'], ["a => b"])).toEqual(['b', 'a']);
});

test('Test 4 ', () => {
    expect(scheduling(['a','b','c','d'], ["a => b", "c => d"])).toEqual(['b','a','d','c']);
});

test('Test 5 ', () => {
    expect(scheduling(['a','b','c'], ["a => b", "b => c"])).toEqual(['c','b','a']);
});

test('Test 6 : Cyclic Dependency', () => {
    expect(scheduling(['a','b','c','d'], ["a => b","b => c", "c => a"])).toBe('Error - cyclic dependency');
});
