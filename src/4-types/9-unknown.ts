// class WordDocument, we talk about class in later sections
class WordDocument {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  toUpperCase(): string {
    return this.value.toUpperCase();
  }
}

function read(document: unknown) {
  console.log(document.value); // Error: Property 'value' does not exist on type 'unknown'.

  // use typeof to check the type of the variable
  if (typeof document === "string") {
    console.log(document.toUpperCase()); // OK
  }

  // use instanceOf for primitive types
  if (document instanceof WordDocument) {
    console.log(document.toUpperCase()); // OK
  }
}
