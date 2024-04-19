class SeatAssignment {
  // Index signature for seatNumber
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats["34D"] = "John Doe";
seats["34E"] = "Jane Doe";

console.log(seats["34D"]); // John Doe
console.log(seats); // { '34D': 'John Doe', '34E': 'Jane Doe' }
