interface Person {
    firstName: string;
    lastName: string;
}

function greeter_1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user_1 = { firstName: "Jane", lastName: "User" };

document.body.getElementsByClassName("example1-2")[0].innerHTML = greeter_1(user_1);
