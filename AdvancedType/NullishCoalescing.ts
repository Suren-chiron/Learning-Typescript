// info :  the expression { let x = foo ?? bar(); }
// info : is the same as { let x = foo !== null && foo !== undefined ? foo : bar() }

const userInput_Nullish = 'test';

const storeData = userInput ?? 'DEFAULT';

console.log(storeData);
