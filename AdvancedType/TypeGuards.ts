type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
   if (typeof a === 'string' || typeof b === 'string') {
      console.log(a.toString() + b.toString());
   } else return a + b;
}

add(3, 4);

type Admin = {
   name: string;
   privileges: string[];
};

type Employee = {
   name: string;
   startDate: Date;
};

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
   console.log('Name: ' + emp.name);
   if ('privileges' in emp) {
      console.log('Privileges: ' + emp.privileges);
   }
   if ('startDate' in emp) {
      console.log('Start Date: ' + emp.startDate);
   }
}

printEmployeeInformation({ name: 'mohammad', startDate: new Date() });
