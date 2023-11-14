// Variables declared by let are only available inside the block where they’re defined.
// Variables declared by var are available throughout the function in which they’re declared.

function testVar(age) {
   var varTest = 12;
   if (age > 10) {
      var varTest = 13;
   }
   console.log(varTest);
}

function testLet(age) {
   let letTest = 12;
   if (age > 10) {
      let letTest = 13;
   }
   console.log(letTest);
}

testVar(22);
testLet(22);
