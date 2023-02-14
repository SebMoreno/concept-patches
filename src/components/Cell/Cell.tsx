import React from "react";
import "./Cell.css";

export const Cell: React.FC<{ letter: string, onClick: () => void }> = ({letter, onClick}) => {
    return <span onClick={() => onClick()} className="cell">{letter}</span>;
};
