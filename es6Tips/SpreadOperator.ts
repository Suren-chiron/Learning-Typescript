/// info for learning more see this reference https://www.educative.io/answers/what-is-the-spread-operator-in-javascript

const hobbies: string[] = ['Sports', 'Cooking'];
const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(...hobbies);

const person: { name: string; age: number; favorites: string[] } = {
   name: 'mohammad',
   age: 17,
   favorites: ['programming', 'music', 'learning english'],
};

const copiedPerson = { ...person };

console.log(copiedPerson);

// info Rest Parameters

// * we can use any type but all of them should be an array like number[], boolean[], string[]
const add = (...numbers: boolean[]) => {
   console.log(numbers);
};

add(true, false, true, true, false);
