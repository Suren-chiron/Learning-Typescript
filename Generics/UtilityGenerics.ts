// info : Partial
// info : The Partial<T> type is used when creating types to make all properties of a type optional. This is helpful in scenarios where you don't need to provide values for all properties.

interface CourseGoal {
   title: string;
   description: string;
   completeUntil: Date;
}

function createCourseGoal(arg: CourseGoal) {
   let courseGoal: Partial<CourseGoal> = {};
   courseGoal.title = arg.title;
   courseGoal.description = arg.description;
   console.log(courseGoal);
   return courseGoal;
}

const date = new Date();
createCourseGoal({ title: 'mohammad', description: 'this is my first article', completeUntil: date });

// info : The Readonly is used when we want to create a variable that be can consents that means don't changes just readonly

let names: Readonly<string[]> = ['Mohammad', 'Ali'];
// names.push('Alex');
