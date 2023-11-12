// info : Any Type

// ! you should never use this type because this is'n a type
// * Don't use any as a type unless you are in the process of migrating a JavaScript project to TypeScript. The compiler effectively treats any as “please turn off type checking for this thing”.

const hobbes: any[] = ['Sport', 'Study', 45, 34, {}];

const productArray: {
   price: any;
   ages: number[];
} = {
   price: '12.99',
   ages: [22, 45, 34, 5],
};

console.log(hobbes, productArray);
