



export function whatsMyType<T>(argument:T): T {
    return  argument;
}


let myString = whatsMyType<string>("Hello World");
let myNumber = whatsMyType<number>(42);
let myBoolean = whatsMyType<boolean>(true);
let myArray = whatsMyType<number[]>([1, 2, 3]);
let myObject = whatsMyType<{ key: string }>({ key: "value" });



console.log(myString.split(" ")); // ["Hello", "World"]
console.log(myNumber.toFixed(2)); // "42.00"
console.log(myBoolean ? "It's true!" : "It's false!"); // "It's true!"
console.log(myArray.map(x => x * 2)); // [2, 4, 6]
console.log(myObject.key); // "value"           