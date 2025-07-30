import { Product,calculateTax, taxCalculationOptions } from "./6-function-destructuring";

const phone: Product = {
    description: 'iPhone 14 Pro Max',
    price: 1200
}
const laptop: Product = {
    description: 'MacBook Pro 16',
    price: 2500
}

const shopingCart = [phone, laptop];
console.log('Shopping Cart:', shopingCart);


const [total, taxTotal] = calculateTax({
    products: shopingCart,
    tax: 0.15
});


console.log('Total: ', total);
console.log('Tax: ', taxTotal);

export {};
