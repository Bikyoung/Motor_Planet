import type { IRecommendItem } from "./types";
import styles from "./Recommend.module.css";

export default function RecommendItem({imgSrc, specs, title, date, distance, cost}: IRecommendItem) {
    return (
        <div className="card recommend-item">
            {/* 이미지 영역 */}
            <img src={imgSrc} className="w-[clamp(13.75rem,12.503rem+4.164vw,17.5rem)]" alt={`${title} 차량`} />

            {/* 상단 콘텐츠 영역 (스펙 + 차량명) */}
            <div className="flex flex-col items-center gap-xs">
                <div className="flex gap-8 tablet:gap-10">
                    {specs.map(spec => 
                        (<span key={spec} className="px-15 py-5 bg-(--color-blue) text-body-sm font-semibold rounded-full">
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
                    <div className={styles.infoData}><span className="font-bold text-[clamp(1.125rem,0.959rem+0.555vw,1.625rem)] text-(--color-blue)">{cost.toLocaleString()}</span>만원</div>
                </li>
            </ul>

            {/* CTA 영역 */}
            <a href="#" target="_blank" className="px-15 py-8 text-body-md font-semibold text-(--color-blue) border rounded-full transition duration-300 ease-in-out hover:bg-[#CEDAFB]">
                차량 상세 보기
            </a>
        </div>
    );
}

