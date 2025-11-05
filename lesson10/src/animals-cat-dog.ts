export interface ISoundable {
    makeSound(): void;
}

export interface IAnimalIdentity {
    name: string;
}

export class DogSoundStrategy implements ISoundable {
    public makeSound(): void {
        console.log('Woof-Woof');
    }
}

export class CatSoundStrategy implements ISoundable {
    public makeSound(): void {
        console.log('Miaw');
    }
}

export class BirdSoundStrategy implements ISoundable {
    public makeSound(): void {
        console.log('Tweet-Tweet');
    }
}

abstract class Animal implements IAnimalIdentity, ISoundable {
    public name: string;
    protected soundStrategy: ISoundable;

    public constructor(name: string, soundStrategy: ISoundable) {
        this.name = name;
        this.soundStrategy = soundStrategy;
    }

    public makeSound(): void {
        console.log(`${this.name} says:`);
        this.soundStrategy.makeSound();
    }
}

export class Dog extends Animal {
    public constructor(name: string) {
        super(name, new DogSoundStrategy());
    }
}

export class Cat extends Animal {
    public constructor(name: string) {
        super(name, new CatSoundStrategy());
    }
}

export class Bird extends Animal {
    public constructor(name: string) {
        super(name, new BirdSoundStrategy());
    }
}

export function interactWithAnimal(animal: IAnimalIdentity & ISoundable): void {
    console.log(`\n--- Interaction with animal: ${animal.name} ---`);
    animal.makeSound();
}

const dog = new Dog('Puppy');
const cat = new Cat('Kitty');
const bird = new Bird('Tweety');

interactWithAnimal(dog);
interactWithAnimal(cat);
interactWithAnimal(bird);
