abstract class GameObject {
    constructor(public x: number, public y: number) {}

    abstract render(): void;
}

class MoveComponent {
    constructor(private gameObject: GameObject) {}

    move(dx: number, dy: number): void {
        this.gameObject.x += dx;
        this.gameObject.y += dy;
    }
}

class AttackComponent {
    constructor(private damage: number) {}

    attack(target: GameObject): void {
        console.log(`Attack ${target} with damage ${this.damage}!`);
    }
}

class Player extends GameObject {
    public moveComponent: MoveComponent;
    public attackComponent: AttackComponent;

    constructor(x: number, y: number) {
        super(x, y);
        this.moveComponent = new MoveComponent(this);
        this.attackComponent = new AttackComponent(10);
    }

    render(): void {
        console.log(`Player on the position (${this.x}, ${this.y})`);
    }

    attack(target: GameObject): void {
        this.attackComponent.attack(target);
    }
}

class Enemy extends GameObject {
    public moveComponent: MoveComponent;
    public attackComponent: AttackComponent;

    constructor(x: number, y: number) {
        super(x, y);
        this.moveComponent = new MoveComponent(this);
        this.attackComponent = new AttackComponent(5);
    }

    render(): void {
        console.log(`Player on the position (${this.x}, ${this.y})`);
    }

    attack(target: GameObject): void {
        this.attackComponent.attack(target);
    }
}

const player = new Player(0, 0);
const enemy = new Enemy(5, 5);

player.render();
enemy.render();

player.moveComponent.move(1, 1);
console.log(`Player moved to: (${player.x}, ${player.y})`);

player.attack(enemy);
