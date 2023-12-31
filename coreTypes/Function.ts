// info : Type Basic Function

function add_Function(number1: number, number2: number): number {
   return number1 + number2;
}

function nothing(number1: number, number2: number): void {
   console.log(number1 + number2);
}

type familyType = {
   brothers: string[];
   sisters: string | string[];
};

function nameFamily(family: familyType): familyType {
   return family;
}

console.log(
   nameFamily({
      brothers: ['bor', 'bor1'],
      sisters: '',
   }),
);

// info: Functions as Types

let combineValues: (a: number, b: number) => number;

combineValues = add_Function;

console.log(combineValues(8, 8));

// info: Function Types Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
   const result = n1 + n2;
   cb(result);
}

addAndHandle(10, 20, (result: number) => {
   return result;
});
