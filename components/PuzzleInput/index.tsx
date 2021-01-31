import React, { ChangeEvent, FormEvent } from "react";
import PuzzleInputForm from "components/PuzzleInputForm";

type Props = {
  id: number;
  stars: number;
  incorrect: boolean;
  value: string;
  onInputUpdate: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const PuzzleInput = ({ id, stars, incorrect, value, onInputUpdate, onInputSubmit }: Props) => {
  return (
    <div>
      {stars === 0 && (
        <p>
          To begin,{" "}
          <a href={`/day/${id}/input`} target="_blank">
            get your puzzle input
          </a>
          .
        </p>
      )}
      {stars < 2 && (
        <>
          <PuzzleInputForm
            value={value}
            onInputUpdate={onInputUpdate}
            onInputSubmit={onInputSubmit}
          />
          {incorrect && <p>Your answer was incorrect, try again.</p>}
        </>
      )}
      {stars === 1 && (
        <p>
          Although it hasn't changed, you can still{" "}
          <a href={`/day/${id}/input`} target="_blank">
            get your puzzle input
          </a>
          .
        </p>
      )}
      {stars === 2 && (
        <p>
          If you still want to see it, you can{" "}
          <a href={`/day/${id}/input`} target="_blank">
            get your puzzle input
          </a>
          .
        </p>
      )}
    </div>
  );
};

export default PuzzleInput;
