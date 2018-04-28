function greetText(name: string): string {
    return "Hello " + name;
}


function hello(name: string): number {
    return 12;
}

console.log(hello('test'));


function setName(name: string): void {
    console.log('void function');
}

function isPaire(x: number): boolean {
    return x % 2 === 0;
}

function isPaire2(nombre: number | string): boolean {
    if(typeof  nombre !== 'number'){
        nombre = parseInt(<string>nombre,10);
    }
    return <number>nombre % 2 === 0;
}

console.log(isPaire2('2'));