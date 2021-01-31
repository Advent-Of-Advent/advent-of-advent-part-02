import PuzzleInput from "components/PuzzleInput";
import PuzzlePartBlock from "components/PuzzlePartBlock";
import React, { ChangeEvent, FormEvent } from "react";
import { Puzzle } from "types/puzzle_definition";

type Props = {
  puzzle: Puzzle;
};

const PuzzleDayContainer = ({ puzzle }: Props) => {
  const [stars, setStars] = React.useState(0);
  const [inputText, setInputText] = React.useState("");
  const [incorrect, setIncorrect] = React.useState(false);

  const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (puzzle.validate[stars]("1", inputText)) {
      setStars((stars) => stars + 1);
      setIncorrect(false);
    } else {
      setIncorrect(true);
    }
  };

  const handleInputUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <PuzzlePartBlock text={puzzle.content[0]} title={puzzle.title} />
      {stars > 0 && (
        <>
          <hr />
          <PuzzlePartBlock text={puzzle.content[1]} title="Part Two" />
        </>
      )}
      <PuzzleInput
        id={puzzle.day}
        stars={stars}
        incorrect={incorrect}
        value={inputText}
        onInputSubmit={handleInputSubmit}
        onInputUpdate={handleInputUpdate}
      />
      {stars === 2 && (
        <>
          <hr />
          <p>Both parts are correct, well done!</p>
        </>
      )}
    </div>
  );
};

export default PuzzleDayContainer;
