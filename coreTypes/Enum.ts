// info: Enum type

enum CodeArea {
   newYork = 1,
   Dallas,
   manhattan,
}

const testNumericEnum = {
   one: CodeArea.newYork,
   two: CodeArea.Dallas,
   there: CodeArea.manhattan,
};

enum Direction {
   Up = 'UP',
   Down = 'DOWN',
   Left = 'LEFT',
   Right = 'RIGHT',
}

const testStringEnum = {
   arrowUp: Direction.Up,
   arrowDown: Direction.Down,
   arrowLeft: Direction.Left,
   arrowRight: Direction.Right,
};

console.log(testNumericEnum, testStringEnum);
