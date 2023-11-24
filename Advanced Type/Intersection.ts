type Admin = {
   name: string;
   privileges: string[];
};

type Employee = {
   name: string;
   startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const testIntersection: ElevatedEmployee = {
   name: 'mohammad',
   privileges: ['create-server'],
   startDate: new Date(),
};
