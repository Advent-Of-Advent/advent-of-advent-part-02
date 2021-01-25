export const pick = <T>(rng: seedrandom.prng, arr: T[]): T => {
  const selectedIndex = Math.floor(rng() * arr.length);
  return arr[selectedIndex];
};
