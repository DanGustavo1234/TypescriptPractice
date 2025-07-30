export interface  Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'iPhone 14 Pro Max',
    price: 1200
}

const laptop: Product = {
    description: 'MacBook Pro 16',
    price: 2500
}
const tablet: Product = {
    description: 'iPad Pro 12.9',
    price: 1500
}


export interface taxCalculationOptions {
    tax: number;
    products: Product[];
}


export function calculateTax(options:taxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total =0;
    products.forEach(({price}) => {
        total += price;
    }
    );
    return [total, total * tax]; 
}



const shoppinCart=[phone, laptop, tablet];
const tax = 0.15;


const [Total,taxTotal] = calculateTax({
    products: shoppinCart,
    tax: tax
});

console.log('Total: ', Total);
console.log('Tax: ', taxTotal);


export {};

