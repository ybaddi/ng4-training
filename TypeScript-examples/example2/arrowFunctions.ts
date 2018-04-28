// ES5-like example
var data = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach(function(line) { console.log(line); });


// Typescript example
var data_1: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship']; data_1.forEach( (line) => console.log(line) );

// no ()
var evens = [2,4,6,8];
var odds = evens.map(v => v + 1);
console.log(odds);

data.forEach( line => {
    console.log(line.toUpperCase())
  });

//