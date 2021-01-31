import { Puzzle } from "types/puzzle_definition";
import { create } from "./create";
import { validatePart1, validatePart2 } from "./validate";
import part1 from "./part1.md";
import part2 from "./part2.md";

const puzzle: Puzzle = {
  day: 2,
  title: "Password Philosophy",
  create,
  validate: [validatePart1, validatePart2],
  content: [part1, part2],
};

export default puzzle;
