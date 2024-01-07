const nameGe: Array<string> = [];
nameGe[0].split('');

///

type TLiteralColor = 'green' | 'blue' | 'black';
const WhichColor: Array<TLiteralColor> = ['black', 'blue'];

///

type TDataStorageGeneric<T> = {
   storage: T[];
   add: (data: T) => void;
};

const textStorageGeneric: TDataStorageGeneric<string> = {
   storage: ['test', 'test2'],
   add(data: 'test') {
      console.log(data);
   },
};

///

const promise: Promise<number> = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve(12);
   }, 2000);
   console.log(reject);
});

// promise.then((data) => {
//    data.split('');
// });
