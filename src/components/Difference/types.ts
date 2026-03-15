import type { ReactNode } from "react";

export interface IDifferenceItem {
    id: number;
    imgSrc: string;
    title: ReactNode;
    desc: ReactNode;
}