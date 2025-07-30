
export interface Pessnger{
    name: string;
    children?: string[]; // Optional property
}

const passenger1: Pessnger = {
    name: "John Doe",
    children: ["Alice", "Bob"]
}

const passenger2: Pessnger = {
    name: "Jane Smith",
    children: []
}


const printChildren = (passenger: Pessnger) => {
    const hosManyChildren = passenger.children?.length || 0; // Use optional chaining to safely access children length
    console.log(hosManyChildren) 
}


printChildren(passenger1); // Output: 2
printChildren(passenger2); // Output: 2