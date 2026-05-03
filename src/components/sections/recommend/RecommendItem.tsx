import type { IRecommendItem } from "./types";
import styles from "./Recommend.module.css";

export default function RecommendItem({imgSrc, specs, title, date, distance, cost}: IRecommendItem) {
    return (
        <article className="card recommend-item">
            {/* 이미지 영역 */}
            <img src={imgSrc} className="w-[clamp(13.75rem,12.503rem+4.164vw,17.5rem)]" alt={`${title} 차량`} />

            {/* 상단 콘텐츠 영역 (스펙 + 차량명) */}
            <div className="flex flex-col items-center gap-xs">
                <ul className="flex gap-8 tablet:gap-10">
                    {specs.map(spec => 
                        (<li key={spec} className="w-fit px-15 py-5 bg-(--color-blue) text-body-sm font-semibold rounded-full">
                            {spec}
                        </li>)
                    )}
                </ul>
                <h3 className="text-card-title text-black">{title}</h3>
            </div>

            {/* 하단 콘텐츠 영역 (연식 + 주행 거리 + 가격) */}
            <dl className="grid grid-cols-2 grid-rows-2 w-full">
                <dt className={styles.infoLabel}>연식</dt>
                <dd className={styles.infoData}>{date}</dd>

                <dt className={styles.infoLabel}>주행거리</dt>
                <dd className={styles.infoData}>{distance.toLocaleString()}km</dd>

                <dt className={styles.infoLabel}>가격</dt>
                <dd className={styles.infoData}><span className="font-bold text-[clamp(1.125rem,0.959rem+0.555vw,1.625rem)] text-(--color-blue)">{cost.toLocaleString()}</span>만원</dd>
            </dl>

            {/* CTA 영역 */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="px-15 py-8 text-body-md font-semibold text-(--color-blue) border rounded-full transition duration-300 ease-in-out hover:bg-[#CEDAFB]">
                차량 상세 보기
            </a>
        </article>
    );
}

