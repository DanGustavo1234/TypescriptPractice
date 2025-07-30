function classDecorator(constructor:any) {
    return class extends constructor {
        newProperty: string = "New Property Value";
        hello: string = "Hello from Decorator";
    }
}




export class SuperClass {
    public myProperty: string= "Hello from SuperClass";

    print(){
        console.log('Hola desde SuperClass');
    }
}


console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);