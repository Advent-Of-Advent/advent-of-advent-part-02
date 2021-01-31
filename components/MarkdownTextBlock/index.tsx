import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  text: string;
};

const MarkdownTextBlock = ({ text }: Props) => {
  return (
    <div>
      <ReactMarkdown source={text} />
    </div>
  );
};

export default MarkdownTextBlock;
