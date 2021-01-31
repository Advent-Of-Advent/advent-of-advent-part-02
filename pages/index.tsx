import React from "react";
import puzzles from "puzzles";

const Route = () => {
  return (
    <div>
      <h1>Advent of Code, kind of</h1>
      <ul>
        {puzzles.map((puzzle, idx) => {
          return (
            <li key={idx}>
              <a href={`/day/${puzzle.day}`}>{puzzle.day}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Route;
