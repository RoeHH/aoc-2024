import { assertEquals } from "jsr:@std/assert";

export interface Day {
  day: number;
  part1: (input: string) => number;
  part2?: (input: string) => number;
}

export interface DayTestData {
  part1Example: {
    input: string;
    expected: number;
  };
  part1?: {
    expected: number;
  };
  part2Example?: {
    input: string;
    expected: number;
  };
  part2?: {
    expected: number;
  };
}

export const initializeTests = (day: Day, testData: DayTestData) => {
  Deno.test({
    name: `aoc-test-util testing day ${day.day} part 1 example`,
    fn: () => {
      const res = day.part1(testData.part1Example.input);
      assertEquals(res, testData.part1Example.expected);
    },
  });
  if (testData.part1) {
    const input = Deno.readTextFileSync(`./day${day.day}/input.txt`);
    Deno.test({
      name: `aoc-test-util testing day ${day.day} part 1`,
      fn: () => {
        const res = day.part1(input);
        assertEquals(res, testData.part1?.expected || -1);
      },
    });
  }
  if (day.part2 && testData.part2Example) {
    Deno.test({
      name: `aoc-test-util testing day ${day.day} part 2 example`,
      fn: () => {
        const res = day.part2 ? day.part2(testData.part2Example?.input || "") : -1;
        assertEquals(res, testData.part2Example?.expected);
      },
    });
  }
  if (day.part2 && testData.part2) {
    const input = Deno.readTextFileSync(`./day${day.day}/input.txt`);
    Deno.test({
      name: `aoc-test-util testing day ${day.day} part 2`,
      fn: () => {
        const res = day.part2 ? day.part2(input) : -1;
        assertEquals(res, testData.part2?.expected || -1);
      },
    });
  }
};
