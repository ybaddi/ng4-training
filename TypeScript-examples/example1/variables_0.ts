//string
var fullName: string = 'Nate Murray';
//number
var age: number = 36;
//boolean
var married: boolean = true;

//arrays
var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
var jobs_1: string[] = ['Apple', 'Dell', 'HP'];

var chickens: Array<number> = [1, 2, 3];
var chickens_1: number[] = [4, 5, 6];


// enum

enum Role {Employee, Manager, Admin};
var role: Role = Role.Employee;
console.log("role is " , role);

enum Role_1 {Employee = 3, Manager, Admin};
var role_1: Role_1 = Role_1.Employee;
var role_1_1: Role_1 = Role_1.Manager;
console.log("role_1 is " , role_1);
console.log("role_1_1 is " , role_1_1);

enum Role_2 {Employee = 3, Manager = 5, Admin = 7};
var role_2: Role_2 = Role_2.Employee;
console.log("role_2 is " , role_2);

enum Role_3 {Employee, Manager, Admin};
console.log("all Role_3 is " , Role_3);


console.log('Roles: ', Role_3[0], ',', Role_3[1], 'and', Role_3[2]);

//Any
var something: any = 'as string';
something = 1;
something = [1, 2, 3];