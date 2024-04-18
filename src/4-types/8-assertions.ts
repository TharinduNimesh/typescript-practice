/* 
    Assertion is used to tell the compiler that the value 
    is of a specific type.
*/

// <input id="mobile" type="text" />

// 1st way (use as keyword)
const mobileInput1 = document.getElementById("mobile") as HTMLInputElement;
console.log(mobileInput1.value); // OK

// 2nd way (use angle bracket)
const mobileInput2 = <HTMLInputElement>document.getElementById("mobile");
console.log(mobileInput2.value); // OK
