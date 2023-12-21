// info old function
const addOld = function (a: number = 23, b: number) {
   return a + b;
};

const printOutputOld: (a: number | string) => void = function (OutPot) {
   console.log(OutPot);
};

const buttonOld = document.querySelector('button');

if (buttonOld) {
   buttonOld.addEventListener('click', function (event) {
      console.log(event);
   });
}

printOutputOld(addOld(undefined, 23));

// info new function which allow in es6
const add_ArrowFun = (a: number = 23, b: number) => a + b;

const printOutput: (a: number | string) => void = (OutPot) => console.log(OutPot);

const button = document.querySelector('button');

if (button) {
   button.addEventListener('click', (event) => console.log(event));
}

printOutput(add_ArrowFun(undefined, 23));
