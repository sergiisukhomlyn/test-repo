class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    bark(): void {
        console.log(`${this.name} says 'Woof'!`);
    }

    setAge(newAge: number): void {
        this.age = newAge;
        console.log(`${this.name} now have age ${this.age}`);
    }
}

const myDog = new Dog('Puppy', 3);

myDog.bark();

myDog.setAge(4);

console.log(`Dog's name: ${myDog.name}, Age: ${myDog.age}`);
