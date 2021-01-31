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
      (rule.text[rule.low - 1] === rule.char ? 1 : 0) +
      (rule.text[rule.high - 1] === rule.char ? 1 : 0);

    return matches === 1;
  });

  return valid.length.toString() === answer;
};

export const validateFromTextPart1: PuzzleValidateAnswer = (text, answer) => {
  const lines = text.split("\n");
  const count = lines.reduce((mem, line) => {
    const [counts, charPlusColon, password] = line.split(" ");
    const [low, high] = counts.split("-").map(Number);
    const character = charPlusColon[0];

    const characterCount = password.split(character).length - 1;
    return mem + (low <= characterCount && high >= characterCount ? 1 : 0);
  }, 0);

  return count.toString() === answer;
};

export const validateFromTextPart2: PuzzleValidateAnswer = (text, answer) => {
  const lines = text.split("\n");
  const count = lines.reduce((mem, line) => {
    const [counts, charPlusColon, password] = line.split(" ");
    const [low, high] = counts.split("-").map(Number);
    const character = charPlusColon[0];

    const matches =
      (password[low - 1] === character ? 1 : 0) + (password[high - 1] === character ? 1 : 0);

    return mem + (matches === 1 ? 1 : 0);
  }, 0);

  return count.toString() === answer;
};
