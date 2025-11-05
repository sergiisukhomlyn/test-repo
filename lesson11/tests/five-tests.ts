import { expect } from 'chai';
import sinon from 'sinon';
import {
    Dog,
    Cat,
    Bird,
    DogSoundStrategy,
    CatSoundStrategy,
    BirdSoundStrategy,
    interactWithAnimal
} from '../src/animals-cat-dog';

describe('Animal sound system', () => {
    let consoleStub: sinon.SinonStub;

    beforeEach(() => {
        consoleStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call DogSoundStrategy.makeSound when Dog.makeSound is invoked', () => {
        const strategyMock = sinon.createStubInstance(DogSoundStrategy);
        const dog = new Dog('Buddy');

        (dog as unknown as { soundStrategy: DogSoundStrategy }).soundStrategy = strategyMock;

        dog.makeSound();

        expect(consoleStub.calledWith('Buddy says:')).to.be.true;
        expect(strategyMock.makeSound.calledOnce).to.be.true;
    });

    it('should log "Woof-Woof" when DogSoundStrategy.makeSound is called', () => {
        const strategy = new DogSoundStrategy();
        strategy.makeSound();
        expect(consoleStub.calledWith('Woof-Woof')).to.be.true;
    });

    it('should call CatSoundStrategy.makeSound when Cat.makeSound is invoked', () => {
        const strategyMock = sinon.createStubInstance(CatSoundStrategy);
        const cat = new Cat('Misty');

        (cat as unknown as { soundStrategy: CatSoundStrategy }).soundStrategy = strategyMock;

        cat.makeSound();

        expect(consoleStub.calledWith('Misty says:')).to.be.true;
        expect(strategyMock.makeSound.calledOnce).to.be.true;
    });

    it('should call BirdSoundStrategy.makeSound when Bird.makeSound is invoked', () => {
        const strategyMock = sinon.createStubInstance(BirdSoundStrategy);
        const bird = new Bird('Sky');

        (bird as unknown as { soundStrategy: BirdSoundStrategy }).soundStrategy = strategyMock;

        bird.makeSound();

        expect(consoleStub.calledWith('Sky says:')).to.be.true;
        expect(strategyMock.makeSound.calledOnce).to.be.true;
    });

    it('should call animal.makeSound inside interactWithAnimal', () => {
        const fakeAnimal = {
            name: 'Mocky',
            makeSound: sinon.spy()
        };

        interactWithAnimal(fakeAnimal);

        expect(consoleStub.calledWith('\n--- Interaction with animal: Mocky ---')).to.be.true;
        expect(fakeAnimal.makeSound.calledOnce).to.be.true;
    });
});
