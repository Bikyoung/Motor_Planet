import type { IRecommendItem } from "./types";
import styles from "./Recommend.module.css";

function RecommendItem({imgSrc, specs, title, date, distance, cost}: IRecommendItem) {
    return (
        <div className="card">
            {/* 이미지 영역 */}
            <img src={imgSrc} className={`aspect-ratio ${styles.carImage}`} alt="추천 차량 이미지" />

            {/* 상단 콘텐츠 영역 (스펙 + 차량명) */}
            <div className="flex flex-col items-center gap-xs">
                <div className="flex gap-8 tablet:gap-10">
                    {specs.map(spec => 
                        (<span key={spec} className={`px-15 py-5 ${styles.carSpec}`}>
                            {spec}
                        </span>)
                    )}
                </div>
                <p className="text-card-title text-black">{title}</p>
            </div>

            {/* 하단 콘텐츠 영역 (연식 + 주행 거리 + 가격) */}
            <ul className="w-full">
                <li className={styles.carStatus}>
                    <div className={styles.infoLabel}>연식</div>
                    <div className={styles.infoData}>{date}</div>
                </li>
                <li className={styles.carStatus}>
                    <div className={styles.infoLabel}>주행거리</div>
                    <div className={styles.infoData}>{distance.toLocaleString()}km</div>
                </li>
                <li className={styles.carStatus}>
                    <div className={styles.infoLabel}>가격</div>
                    <div className={styles.infoData}><span className={styles.carCost}>{cost.toLocaleString()}</span>만원</div>
                </li>
            </ul>

            {/* CTA 영역 */}
            <a href="#" target="_blank" className={styles.itemCta}>
                차량 상세 보기
            </a>
        </div>
    );
}

export default RecommendItem;   