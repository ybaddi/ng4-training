class Person {
    first_name: string;
    last_name: string;
    age: number;

    // constructor() {
    //
    // }

    constructor(first_name: string, last_name: string, age: number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    greet() {
        console.log("Hello", this.first_name);
    }

    ageInYears(years: number): number {
        return this.age + years;
    }
}


// declare a variable of type Person
var p: Person;

// instantiate a new Person instance
p = new Person('first_name', 'last_name', 11);  // var p:Person=new Person('first_name', 'last_name', 11);

// give it a first_name
p.first_name = 'Felipe';

// call the greet method
p.greet();


// set initial age
p.age = 6;

// how old will he be in 12 years?
p.ageInYears(12);

//->18

