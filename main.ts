const day = Deno.args[0] || prompt("Please enter the day:");
;
const part = Deno.args[1];


const input = await Deno.readTextFile(`./day${day}/input.txt`);
const { DAY } = await import(`./day${day}/main.ts`);

if (part === "1" || part === undefined) {
  console.log(`Running day ${day}, part 1`);
  console.log(DAY.part1(input));
}

if ((part === "2" || part === undefined) && DAY.part2) {
  console.log(`Running day ${day}, part 2`);
  console.log(DAY.part2(input));
}