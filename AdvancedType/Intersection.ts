type Admin_InterSection = {
   name: string;
   privileges: string[];
};

type Employee_InterSection = {
   name: string;
   startDate: Date;
};

type ElevatedEmployee = Admin_InterSection & Employee_InterSection;

const testIntersection: ElevatedEmployee = {
   name: 'mohammad',
   privileges: ['create-server'],
   startDate: new Date(),
};
