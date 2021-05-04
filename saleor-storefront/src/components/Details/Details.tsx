import React from "react";
import "./scss/index.scss";

type Props = {
  summary: string;
  details: string | React.ReactNode;
};

const Details: React.FC<Props> = ({ summary, details }) => {
  return (
    <details className="details">
      <summary>{summary}</summary>
      <p>{details}</p>
    </details>
  );
};

export default Details;
