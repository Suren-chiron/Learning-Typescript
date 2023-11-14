// * for array

const favorites: string[] = ['Sports', 'programming'];

const [test1, test2] = favorites;

console.log(test1, test2);

// * for object

const carDetail: { color: string; type: string } = {
   color: 'blue',
   type: 'c',
};

const { color, type } = carDetail;

console.log(color, type);
