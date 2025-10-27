import { expect } from 'chai';
import sinon from 'ts-sinon';
import {
    Dog,
    Cat,
    Bird,
    DogSoundStrategy,
    CatSoundStrategy,
    BirdSoundStrategy
} from '../src/animals-cat-dog';

describe('Animal sound strategy tests', () => {
    let consoleSpy: sinon.SinonSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('DogSoundStrategy should log "Woof-Woof"', () => {
        const strategy = new DogSoundStrategy();
        strategy.makeSound();
        expect(consoleSpy.calledWith('Woof-Woof')).to.be.true;
    });

    it('CatSoundStrategy should log "Miaw"', () => {
        const strategy = new CatSoundStrategy();
        strategy.makeSound();
        expect(consoleSpy.calledWith('Miaw')).to.be.true;
    });

    it('BirdSoundStrategy should log "Tweet-Tweet"', () => {
        const strategy = new BirdSoundStrategy();
        strategy.makeSound();
        expect(consoleSpy.calledWith('Tweet-Tweet')).to.be.true;
    });

    it('Dog.makeSound() should log dog name and sound', () => {
        const dog = new Dog('Puppy');
        dog.makeSound();
        expect(consoleSpy.calledWith('Puppy says:')).to.be.true;
        expect(consoleSpy.calledWith('Woof-Woof')).to.be.true;
    });

    it('Cat.makeSound() should log cat name and sound', () => {
        const cat = new Cat('Kitty');
        cat.makeSound();
        expect(consoleSpy.calledWith('Kitty says:')).to.be.true;
        expect(consoleSpy.calledWith('Miaw')).to.be.true;
    });

    it('Bird.makeSound() should log bird name and sound', () => {
        const bird = new Bird('Tweety');
        bird.makeSound();
        expect(consoleSpy.calledWith('Tweety says:')).to.be.true;
        expect(consoleSpy.calledWith('Tweet-Tweet')).to.be.true;
    });
});
