import type { IDifferenceItem } from "./Difference";
import styles from "./DifferenceItem.module.css";

function DifferenceItem({imgSrc, title, desc}: IDifferenceItem) {
    return (
        <li className="flex items-center gap-20 tablet:gap-(--spacing-md) px-30 tablet:px-(--spacing-lg) py-(--spacing-sm) bg-[#053B89] rounded-[10px]">
            <img src={imgSrc} className={styles.differenceImage} alt="모토플래닛 차별점 아이콘"/>
            <div>
                <h3 className="mb-(--spacing-xs) text-card-title">{title}</h3>
                <p className="text-body-md">{desc}</p>
            </div>
        </li>
    );
}

export default DifferenceItem;