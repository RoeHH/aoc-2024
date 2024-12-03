import { Day, initializeTests } from "../aoc-test-util.ts";

const getColumns = (input: string): number[][] => input
      .split("\n")
      .map((line) => line.split("   "))
      .reduce((acc, [x, y]) => {
        acc[0].push(Number(x));
        acc[1].push(Number(y));
        return acc;
      }, [[] as number[], [] as number[]])
      .map((row) => row.sort((a, b) => a - b))

export const DAY: Day = {
  day: 1,
  part1: (input: string): number => {
    const [col1, col2] = getColumns(input);
    
    let total = 0;
    for (let i = 0; i < col1.length; i++) {
      col2[i] < col1[i] ? total += col1[i] - col2[i] : total += col2[i] - col1[i];
    }   
    return total;
  },
  part2: (input: string): number => {
    const [col1, col2] = getColumns(input);
    
    let total = 0;
    for (const element of col1) {
      total += element * col2.filter((el) => el === element).length
    }
    return total;
  }
};

initializeTests(DAY, {
  part1Example: {
    input: `3   3
4   3
2   4
1   9
3   5
3   3`,
    expected: 11,
  },
  part1: {
    expected: 1110981,
  },
  part2Example: {
    input: `3   4
4   3
2   5
1   3
3   9
3   3`,
    expected: 31,
  },
  part2: {
    expected: 24869388,
  },
});
