import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  value: string;
  onInputUpdate: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const PuzzleInputForm = ({ value, onInputUpdate, onInputSubmit }: Props) => {
  return (
    <form onSubmit={onInputSubmit}>
      <label>
        Answer:
        <input type="text" onChange={onInputUpdate} value={value} />
      </label>
      <button>[ Submit ]</button>
    </form>
  );
};

export default PuzzleInputForm;
