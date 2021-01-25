import { PuzzleValidateAnswer } from "types/puzzle_definition";
import { uncompressed } from "./create";

export const validatePart1: PuzzleValidateAnswer = (id, answer) => {
  const input = uncompressed(id);
  const valid = input.filter((rule) => {
    const count = rule.text.split(rule.char).length - 1;
    return count >= rule.low && count <= rule.high;
  });

  return valid.length.toString() === answer;
};

export const validatePart2: PuzzleValidateAnswer = (id, answer) => {
  const input = uncompressed(id);
  const valid = input.filter((rule) => {
    const matches: number =
      (rule.text[rule.low] === rule.char ? 1 : 0) + (rule.text[rule.high] === rule.char ? 1 : 0);

    return matches === 1;
  });

  return valid.length.toString() === answer;
};
