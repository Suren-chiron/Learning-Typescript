// info : simple typing system with object type
function merge(objA: object, objB: object) {
   return Object.assign(objA, objB);
}

merge({ name: 'mohammad:', family: 'karimi' }, { job: 'programmer', age: 17 });

// info : Generic typing

function mergeGE<V extends string, U extends object>(objAA: V, objBB: U) {
   console.log(objAA, objBB);
}

mergeGE('test', { job: 'programmer', age: 18 });

// info : Generic Custom Extends typing

type test = { name: string; family: string };

function mergeGECustom<V extends test, U extends object>(objAA: V, objBB: U) {
   console.log(objAA, objBB);
}

mergeGECustom({ name: 'mohammad', family: 'karimi' }, { job: 'programmer', age: 18 });

// info : Another Generic Function

type Lengthy = {
   length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
   let descriptionText = 'Got no value.';
   if (element.length === 1) descriptionText = 'Got 1 value.';
   if (element.length > 1) descriptionText = 'Got' + element.length + 'value';
   return [element, descriptionText];
}

countAndDescribe('test');

// ? : in this comparison we see, that when we use simple typing, actually we use any type that we can use any type as parameter
// ? : but in the Generic typing we say to tsc that we have a two or more specific type of object (also we can use another type like string or number and also we can use custom type) that be include anything but in the object like parameter that we use in the mergeGE
