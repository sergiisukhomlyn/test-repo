export enum Direction {
    Up,
    Down,
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction.Right, Direction.Left, Direction.Up, Direction.Down);
console.log(Direction[1]);

const testContext: Partial<Record<Direction, unknown>> = {};

testContext[Direction.Right] = { a: 1, b: 2};
testContext['Left' as Direction] = {direction: 'Left'};

console.log(testContext.Right, testContext.Left);
