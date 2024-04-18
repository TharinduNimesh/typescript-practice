type Name = string | null | undefined;

function greet(name: Name) {
  if (name === null || name === undefined) {
    console.log("Hello, stranger");
  } else {
    console.log(`Hello, ${name}`);
  }
}

greet("John Doe"); // Hello, John Doe
greet(null); // Hello, stranger
greet(undefined); // Hello, stranger