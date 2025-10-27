import {
    Dog,
    Cat,
    Bird,
    interactWithAnimal,
    ISoundable,
    IAnimalIdentity
} from '../src/animals-cat-dog';

beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => undefined);
});

afterEach(() => {
    (console.log as jest.Mock).mockRestore();
});

describe('interactWithAnimal()', () => {
    it('should call makeSound() and type animal name', () => {
        const mockAnimal: IAnimalIdentity & ISoundable = {
            name: 'Testy',
            makeSound: jest.fn()
        };

        interactWithAnimal(mockAnimal);

        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining('Interaction with animal: Testy')
        );
        expect(mockAnimal.makeSound).toHaveBeenCalled();
    });

    it('works fine with Dog', () => {
        const dog = new Dog('Puppy');
        interactWithAnimal(dog);

        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining('Interaction with animal: Puppy')
        );
        expect(console.log).toHaveBeenCalledWith('Puppy says:');
        expect(console.log).toHaveBeenCalledWith('Woof-Woof');
    });

    it('works fine with Cat', () => {
        const cat = new Cat('Kitty');
        interactWithAnimal(cat);

        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining('Interaction with animal: Kitty')
        );
        expect(console.log).toHaveBeenCalledWith('Kitty says:');
        expect(console.log).toHaveBeenCalledWith('Miaw');
    });

    it('works fine with Bird', () => {
        const bird = new Bird('Tweety');
        interactWithAnimal(bird);

        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining('Interaction with animal: Tweety')
        );
        expect(console.log).toHaveBeenCalledWith('Tweety says:');
        expect(console.log).toHaveBeenCalledWith('Tweet-Tweet');
    });
});
