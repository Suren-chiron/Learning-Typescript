const nameGe: Array<string> = [];
nameGe[0].split('');

const promise: Promise<number> = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve(12);
   }, 2000);
});

promise.then((data) => {
   data.split('');
});
