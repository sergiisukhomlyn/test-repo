interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} says: Woof-Woof`);
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} says: Miaw`);
    }
}

function interactWithAnimal(animal: Animal): void {
    console.log(`Interaction with animal ${animal.name}`);
    animal.makeSound();
}

const dog = new Dog('Puppy');
const cat = new Cat('Kitty');

interactWithAnimal(dog);

interactWithAnimal(cat);
