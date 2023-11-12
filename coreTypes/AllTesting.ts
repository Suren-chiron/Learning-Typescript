// info: number, string and boolean types

// function add(
//    num1: number,
//    num2: number,
//    showResult: boolean,
//    phrase: string
// ) {
//    const result = num1 + num2;
//    if (showResult) {
//       console.log(phrase + ' ' + result);
//    } else {
//       return num1 + num2;
//    }
// }

// let number1: number;
// number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is:';

// add(number1, number2, printResult, resultPhrase);

// info: Object and nested object type

// const person: {
//    name: string;
//    age: number;
// } = {
//    name: 'mohammad',
//    age: 17,
// };

// const product: {
//    id: string;
//    price: number;
//    tags: string[];
//    details: {
//       title: string;
//       description: string;
//    };
// } = {
//    id: 'abc1',
//    price: 12.99,
//    tags: ['great-offer', 'hot-and-new'],
//    details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!',
//    },
// };

// console.log(person, product);

// info: Array type

// const hobbes: string[] = ['Sport', 'Study'];

// const productArray: {
//    price: number;
//    ages: number[];
// } = {
//    price: 12.99,
//    ages: [22, 45, 34, 5],
// };

// info: Tuples type

// const tuplesArray: [string, number] = ['mohammad', 3];

// const memberId: {
//    name: string;
//    family: string;
//    one: [string, number];
// } = {
//    name: 'mohammad',
//    family: 'karimi',
//    one: ['mohammad', 3],
// };

// info: Enum type

// enum CodeArea {
//    newYork = 1,
//    Dallas,
//    manhattan,
// }

// const testNumericEnum = {
//    one: CodeArea.newYork,
//    two: CodeArea.Dallas,
//    there: CodeArea.manhattan,
// };

// enum Direction {
//    Up = 'UP',
//    Down = 'DOWN',
//    Left = 'LEFT',
//    Right = 'RIGHT',
// }

// const testStringEnum = {
//    arrowUp: Direction.Up,
//    arrowDown: Direction.Down,
//    arrowLeft: Direction.Left,
//    arrowRight: Direction.Right,
// };

// console.log(testNumericEnum, testStringEnum);

// info : Any Type

// // ! you should never use this type because this is'n a type
// // * Don't use any as a type unless you are in the process of migrating a JavaScript project to TypeScript. The compiler effectively treats any as “please turn off type checking for this thing”.

// const hobbes: any[] = ['Sport', 'Study', 45, 34, {}];

// const productArray: {
//    price: any;
//    ages: number[];
// } = {
//    price: '12.99',
//    ages: [22, 45, 34, 5],
// };

// console.log(hobbes, productArray);

// info : Union Type

// function combine(
//    input1: number | string,
//    input2: number | string
// ) {
//    let result;
//    if (
//       typeof input1 === 'number' &&
//       typeof input2 === 'number'
//    ) {
//       result = input1 + input2;
//    } else {
//       result = input1.toString() + input2.toString();
//    }
//    return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);

// info : Literal Type

// function getColorLiterallyTest(color: 'green' | 'red') {
//    console.log(color);
// }
// getColorLiterallyTest('green');

// info : Type Alias Custom Type

// type testAliasType = 'mt' | 'cm';
// function getTypeMetric(metric: testAliasType) {
//    console.log(metric);
// }
// getTypeMetric('mt');

// info : Type Function and Void

// function add(number1: number, number2: number): number {
//    return number1 + number2;
// }

// function nothing(number1: number, number2: number): void {
//    console.log(number1 + number2);
// }

// type familyType = {
//    mother: string;
//    father: string;
//    brothers: string[];
//    sisters: string | string[];
// };

// function nameFamily(family: familyType): familyType {
//    return family;
// }

// console.log(
//    nameFamily({
//       mother: 'mother',
//       father: 'father',
//       brothers: ['ali', 'mahdi'],
//       sisters: '',
//    })
// );

// info: Functions as Types

// function add(number1: number, number2: number): number {
//    return number1 + number2;
// }

// let combineValues: (a: number, b: number) => number;

// combineValues = add;

// console.log(combineValues(8, 8));

// info: Function Types Callbacks

// function addAndHandle(
//    n1: number,
//    n2: number,
//    cb: (num: number) => void
// ) {
//    const result = n1 + n2;
//    cb(result);
// }

// addAndHandle(10, 20, (result: number) => {
//    return result;
// });

// info : Unknown Type
// let userInput: unknown;
// let userName: string;

// userInput = 3;
// userInput = 'mohammad';

// that is the different between unknown type and any type
// when set userInput type to any this above code will work but when changed to unknown it's not work

// userName = userInput;

// info : Never Type

// when we want throw an error or something that return anything we use never

// function fail(msg: string): never {
//    throw new Error(msg);
// }
