import React from "react";
import { GetServerSideProps } from "next";
import puzzles from "puzzles/index";

type Props = {
  index: number;
};

const Route = ({ index }: Props) => {
  const puzzle = puzzles[index];
  return <pre>{puzzle.create("1")}</pre>;
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
