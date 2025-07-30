

export class Person {

  constructor(public name: string, private address?: string) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName,"New York");
//   }
// }


export class Hero  {

    // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person 
  ) {
    // this.person = new Person(realName, "New York");
  }
}


const daniel=new Person("Daniel Cordova", "Madrid");

const ironman = new Hero("Ironman", 45, "Tony Stark",daniel);
console.log("Ironman:", ironman);
