// info: number, string and boolean types

function add_NuStBoo(num1: number, num2: number, showResult: boolean, phrase: string) {
   const result = num1 + num2;
   if (showResult) {
      console.log(phrase + ' ' + result);
   } else {
      return num1 + num2;
   }
}

const number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:';

add_NuStBoo(number1, number2, printResult, resultPhrase);
