type ErrorContainer = {
   [prop: string]: string;
};

const errorBag: ErrorContainer = {
   error: 'we have an error in this part of site',
   userName: 'mohammad',
   email: 'mohammadkarimi.swctw@gmail.com',
};

// info : Another example

type TIUser = {
   // info : we can set any property for this type with key string and value boolean
   [s: string]: boolean;
};

const iUser: TIUser = {
   email: true,
   password: false,
};

console.log(iUser.email);
