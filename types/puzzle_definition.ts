export type Puzzle = {
  day: number;
  title: string;
  create: PuzzleCreateInput;
  validate: PuzzleValidateAnswer[];
  content: string[];
};

export type PuzzleCreateInput = (id: string) => string;
export type PuzzleValidateAnswer = (id: string, answer: string) => boolean;
