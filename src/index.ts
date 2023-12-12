type Lengthy = {
   length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
   let descriptionText = 'Got no value.';
   if (element.length === 1) descriptionText = 'Got 1 value.';
   if (element.length > 1) descriptionText = 'Got' + element.length + 'value';
   return [element, descriptionText];
}

console.log(countAndDescribe('test'));
