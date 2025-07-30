function addNumbers(a: number, b: number) {
  return a + b;
}


const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
};

function multiply(first: number, second: number): number {
    return first * second;
}   

const result:number=addNumbers(2, 3);
const resultArrow:string = addNumbersArrow(2, 3);

const resultMultiply: number = multiply(4, 5);

console.log(`Result from function: ${result}`);
console.log(`Result from arrow function: ${resultArrow}`);

export {};
