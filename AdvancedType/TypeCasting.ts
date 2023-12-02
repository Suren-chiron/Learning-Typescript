// error this is error when we can't use typeCasting

// const userInputElement = document.getElementById('user-input');

// console.log(userInputElement.value)

// info and this is the best practice when using typeCasting

const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

console.log(userInputElement.value);
