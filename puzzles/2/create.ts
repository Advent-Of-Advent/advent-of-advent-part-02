import seedrandom from "seedrandom";
import { PuzzleCreateInput } from "types/puzzle_definition";
import { pick } from "util/pick";

const CONSONANTS = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];

export type PuzzleInputPasswordRule = {
  low: number;
  high: number;
  char: string;
  text: string;
};

export const create: PuzzleCreateInput = (id) => {
  const rng = seedrandom(id);
  const values = uncompressed(id, rng);

  return values
    .map((value) => `${value.low}-${value.high} ${value.char}: ${value.text}`)
    .join("\n");
};

export const uncompressed = (id: string, rng = seedrandom(id)): PuzzleInputPasswordRule[] => {
  const passwords: PuzzleInputPasswordRule[] = [];
  const passwordSet = new Set<string>();

  while (passwords.length < 1000) {
    const low = Math.min(Math.ceil(rng() * 19), Math.ceil(rng() * 19));
    const high = low + Math.min(Math.ceil(rng() * (20 - low)), Math.ceil(rng() * (20 - low)));
    const length = high + Math.min(Math.ceil(rng() * (20 - high)), Math.ceil(rng() * (20 - high)));

    const char = pick(rng, CONSONANTS);
    const text = Array.from(Array(length), (_) => {
      return rng() < low / length ? char : pick(rng, CONSONANTS);
    }).join("");

    if (passwordSet.has(text)) {
      continue;
    }

    passwordSet.add(text);
    passwords.push({
      low,
      high,
      char,
      text,
    });
  }

  return passwords;
};
