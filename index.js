
function fizzBuss(input){
  if (typeof input !== "number") {
  return NaN;
}
 else if ( typeof input ==="number" && (input % 3 === 0) && (input % 5 === 0)) {
  return "FizzBuzz";
 }
  else if (typeof input ==="number" && (input % 3 === 0)) {
      return "Fizz";
    } else if (typeof input ==="number" && (input % 5 === 0)) {
      return "Buzz";
    } else {
      return input;

}
}
let output = fizzBuss(false)
console.log(output)