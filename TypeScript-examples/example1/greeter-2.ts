class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter_2(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user_2 = new Student("Jane", "M.", "User");

document.body.getElementsByClassName("example1-3")[0].innerHTML = greeter_2(user_2);
