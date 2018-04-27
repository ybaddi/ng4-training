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

enum Role_1 {Employee = 3, Manager, Admin};
var role_1: Role_1 = Role_1.Employee;

enum Role_2 {Employee = 3, Manager = 5, Admin = 7};
var role_2: Role_2 = Role_2.Employee;

enum Role_3 {Employee, Manager, Admin};
console.log('Roles: ', Role_3[0], ',', Role_3[1], 'and', Role_3[2]);