export interface Data {
    label: string;
    description: string;
    positions: CellInfo[];
}

export interface CellInfo {
    letter: string;
    position: number;
}

