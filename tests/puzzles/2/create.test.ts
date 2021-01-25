import { create, uncompressed } from "puzzles/2/create";

describe("Day 2 - Create input", () => {
  it("creates predictable input", () => {
    expect(create("1")).toEqual(create("1"));
    expect(create("1")).not.toEqual(create("2"));
  });

  it("creates predictable unshuffled raw data", () => {
    expect(uncompressed("1")).toEqual(uncompressed("1"));
    expect(uncompressed("1")).not.toEqual(uncompressed("2"));
  });
});
