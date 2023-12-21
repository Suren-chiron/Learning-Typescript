// info: object and nested object type

const person_Object: {
   name: string;
   age: number;
} = {
   name: 'mohammad',
   age: 17,
};

const product: {
   id: string;
   price: number;
   tags: string[];
   details: {
      title: string;
      description: string;
   };
} = {
   id: 'abc1',
   price: 12.99,
   tags: ['great-offer', 'hot-and-new'],
   details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!',
   },
};

console.log(person_Object, product);
