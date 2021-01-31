import React from "react";
import { GetServerSideProps } from "next";
import PuzzleDayContainer from "containers/PuzzleDay";
import puzzles from "puzzles/index";

type Props = {
  index: number;
};

const Route = ({ index }: Props) => {
  const puzzle = puzzles[index];
  return <PuzzleDayContainer puzzle={puzzle} />;
};

export default Route;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;

  return {
    props: {
      index: Number(id) - 1,
    },
  };
};
