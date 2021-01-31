import React from "react";
import MarkdownTextBlock from "components/MarkdownTextBlock";

type Props = {
  title: string;
  text: string;
};

const PuzzlePartBlock = ({ title, text }: Props) => {
  return (
    <section>
      <p>--- {title} ---</p>
      <MarkdownTextBlock text={text} />
    </section>
  );
};

export default PuzzlePartBlock;
