import { createPortal } from "react-dom";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    targetId: string;
};

export default function Portal({children, targetId}: Props) {
    const target = document.getElementById(targetId);

    if (!target) return;
    return createPortal(children, target);
}