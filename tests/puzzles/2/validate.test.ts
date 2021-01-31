import fs from "fs";
import { create } from "puzzles/2/create";

import {
  validatePart1,
  validatePart2,
  validateFromTextPart1,
  validateFromTextPart2,
} from "puzzles/2/validate";

describe("Day 2 - Validate part 1", () => {
  it("validates part 1", () => {
    expect(validatePart1("1", "667")).toEqual(true);
    expect(validatePart1("2", "633")).toEqual(true);
    expect(validatePart1("1", "0")).toEqual(false);
  });

  it("works on baseline AoC input", async (done) => {
    const baseline = await fs.promises.readFile(`${process.cwd()}/puzzles/2/baseline.txt`, "utf8");
    expect(validateFromTextPart1(baseline, "454")).toEqual(true);
    expect(validateFromTextPart1(create("1"), "667")).toEqual(true);
    done();
  });
});

describe("Day 2 - Validate part 2", () => {
  it("validates part 2", () => {
    expect(validatePart2("1", "402")).toEqual(true);
    expect(validatePart2("2", "405")).toEqual(true);
    expect(validatePart2("1", "0")).toEqual(false);
  });

  it("works on baseline AoC input", async (done) => {
    const baseline = await fs.promises.readFile(`${process.cwd()}/puzzles/2/baseline.txt`, "utf8");
    expect(validateFromTextPart2(baseline, "649")).toEqual(true);
    expect(validateFromTextPart2(create("1"), "402")).toEqual(true);
    done();
  });
});
