interface ISoundable {
    makeSound(): void;
}

interface ISoundStrategy extends ISoundable {}

interface IAnimalIdentity {
    name: string;
}

class DogSoundStrategy implements ISoundStrategy {
    makeSound(): void {
        console.log('Woof-Woof');
    }
}

class CatSoundStrategy implements ISoundStrategy {
    makeSound(): void {
        console.log('Miaw');
    }
}

class BirdSoundStrategy implements ISoundStrategy {
    makeSound(): void {
        console.log('Tweet-Tweet');
    }
}

abstract class Animal implements IAnimalIdentity, ISoundable {
    public name: string;
    protected soundStrategy: ISoundStrategy;

    constructor(name: string, soundStrategy: ISoundStrategy) {
        this.name = name;
        this.soundStrategy = soundStrategy;
    }

    public makeSound(): void {
        console.log(`${this.name} says:`);
        this.soundStrategy.makeSound();
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name, new DogSoundStrategy());
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name, new CatSoundStrategy());
    }
}

class Bird extends Animal {
    constructor(name: string) {
        super(name, new BirdSoundStrategy());
    }
}

function interactWithAnimal(animal: IAnimalIdentity & ISoundable): void {
    console.log(`\n--- Interaction with animal: ${animal.name} ---`);
    animal.makeSound();
}

const dog = new Dog('Puppy');
const cat = new Cat('Kitty');
const bird = new Bird('Tweety');

interactWithAnimal(dog);
interactWithAnimal(cat);
interactWithAnimal(bird);
