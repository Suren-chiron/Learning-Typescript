// info TypeScript Optional Chaining is the process of searching and calling variables, methods, parameters that might be null in existence.
// info This particular feature allows the developers to stop encountering the errors which generally come up if things are not defined, and also they could easily handle the undefined things with this particular feature.
// info more information about this part of typescript https://www.geeksforgeeks.org/how-optional-chaining-works-in-typescript/

const fetchedUserData = {
   id: 'u1',
   name: 'mohammad',
   job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title); // when we use Optional Chaining if data not defined this return undefined but when we don't use this we get error like above code
// console.log(fetchedUserData.job.title)

// info another useful example

type User = {
   id: number;
   name?: {
      firstName: string;
      lastName?: string;
   };
};

const users: User[] = [
   {
      id: 1,
      name: {
         firstName: 'Geeks-for-Geeks',
      },
   },
   {
      id: 2,
      name: {
         firstName: 'Hello',
         lastName: 'World',
      },
   },
   {
      id: 3,
   },
];

users.map((element) => console.log(element.name?.lastName));
