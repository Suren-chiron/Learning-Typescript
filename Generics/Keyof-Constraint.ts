// info : keyof Constraint
// info : with this feature we can constraint a param with another param or type like above example

// info : with custom type
// ? type testAliasType = { one: '1'; two: '2' };

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
   console.log(obj, key);
}

extractAndConvert({ learn: 'test', language: 'test' }, 'learn');
