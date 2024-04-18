/* 
    The never type represents the type of values that never occur. 
    For example, never is the return type for a function expression that always throws
    an exception or one that never returns. The never type is a subtype of, 
    and assignable to, every type; 
    however, no type is a subtype of, or assignable to, never (except never itself). 
    Even any isn't assignable to never.
 */

function animate(): never {
  while (true) {
    // Animation logic
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

function doAnimation() {
  animate();
  console.log("This line will never be executed"); // because animate() never returns
}

function getDate() {
  throwError("Something went wrong"); // This function never returns
  return "Something"; // This line will never be executed because throwError() never returns
}
