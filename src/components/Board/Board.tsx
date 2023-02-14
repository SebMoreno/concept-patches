import React from "react";
import dataJson from "../../data.json";
import { CellInfo, Concept } from "../../interfaces";
import { Cell } from "../Cell/Cell";
import "./Board.css";

const data: Concept[] = dataJson;
const cells: CellInfo[] = data
    .reduce((acc: CellInfo[], cell) => acc.concat(cell.positions), []);
export const Board: React.FC = () => {
    const handleClick = () => {

    };
    return <div id="board">
        {cells.map((cell, i) => <Cell key={i} onClick={handleClick} {...cell}/>)}
    </div>;
};
