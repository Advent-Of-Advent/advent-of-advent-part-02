import { validatePart1, validatePart2 } from "puzzles/2/validate";

describe("Day 2 - Validate part 1", () => {
  it("validates part 1", () => {
    expect(validatePart1("1", "667")).toEqual(true);
    expect(validatePart1("2", "633")).toEqual(true);
    expect(validatePart1("1", "0")).toEqual(false);
  });
});

describe("Day 2 - Validate part 2", () => {
  it("validates part 2", () => {
    expect(validatePart2("1", "438")).toEqual(true);
    expect(validatePart2("2", "414")).toEqual(true);
    expect(validatePart2("1", "0")).toEqual(false);
  });
});
