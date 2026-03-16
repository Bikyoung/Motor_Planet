import styles from "./DifferenceItem.module.css";
import type { IDifferenceItem } from "./types";

function DifferenceItem({imgSrc, title, desc}: IDifferenceItem) {
    return (
        <li className={`flex items-center gap-20 tablet:gap-md py-sm ${styles.differenceItem}`}>
            <img src={imgSrc} className={styles.differenceImage} alt="모토플래닛 차별점 아이콘" aria-hidden="true" />
            <div>
                <h3 className="mb-xs text-card-title">{title}</h3>
                <p className="text-body-md">{desc}</p>
            </div>
        </li>
    );
}

export default DifferenceItem;