"use strict";
// info :  the expression { let x = foo ?? bar(); }
// info : is the same as { let x = foo !== null && foo !== undefined ? foo : bar() }
const userInput = 'test';
const storeData = userInput ?? 'DEFAULT';
console.log(storeData);
