interface  Product{
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


interface taxCalculationOptions {
    tax: number;
    products: Product[];
}




function calculateTax(options:taxCalculationOptions): number[] {
    let total =0;
    options.products.forEach(product => {
        total += product.price;
    }
    );
    return [total, total * options.tax]; // [total, tax]
}



const shoppinCart=[phone, laptop, tablet];
const tax = 0.15;


const result = calculateTax({
    products: shoppinCart,
    tax: tax
});

console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);






export {};

