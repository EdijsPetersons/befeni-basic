import fs from 'fs';

const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });

/** 
 * input: add 2\nmultiply 3\napply 3
 * output: 15
 * explanation: (3 + 2) * 3 = 15
**/

function calculateOperation(keyword, number, value) {
  switch (keyword) {
    case "add":
      return number + value;
    case "subtract":
      return number - value;
    case "multiply":
      return number * value;
    case "divide":
      return number / value;
    default:
      return number;
  }
}

export function calculate(input) {
  const instructions = input.split("\n")
  const lastOperationValue = instructions.pop().split(" ")[1]
  const applyTo = parseInt(lastOperationValue);

  return instructions.reduce((acc, instruction) => {
    const operation = instruction.split(" ");
    const keyword = operation[0];
    const value = parseInt(operation[1]);

    return calculateOperation(keyword, acc, value);
  }, applyTo);
}

console.log('Result: ', calculate(data));