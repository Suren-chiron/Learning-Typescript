interface Person {
   name?: string;
   readonly age: number;
   greet(phrase: string): void;
}

let user1: Person;

user1 = {
   age: 17,
   greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
   },
};

user1.greet('Hi there - I am');

function test(man: Person) {
   console.log(man.age);
   console.log(man.greet('mohammad'));
}

test({
   age: 17,
   greet(phrase: string) {
      return 'hello ' + phrase;
   },
});
