// info : Unknown Type
// ? The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
// * مثل امام زمان همه جا هست و هیچ جا نیست. اینم مث اون دقیقا معلوم نیست فازش چیه
let userInput: unknown;
let userName: string;

userInput = 3;
userInput = 'mohammad';

// that is the different between unknown type and any type
// when set userInput type to any this above code will work but when changed to unknown it's not work

// userName = userInput;
