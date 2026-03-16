import type { IReviewItem } from "./types.ts";
import ratingImg from "../../assets/images/rating.webp";
import styles from "./Review.module.css";

function ReviewItem({customer, desc, imgSrc, carInfo}: IReviewItem) {
    return (
        <div className={`card ${styles.item}`}>
            {/* 메타 영역 (별점 이미지 + 고객명) */}
            <div className="w-full flex justify-between items-center">
                <img src={ratingImg} className={`inline-block aspect-auto ${styles.rating}`} alt="별점" />
                <span className={styles.customer}>{customer} 고객님</span>
            </div>
            {/* 리뷰 글 영역 */}
            <p className={styles.desc}>{desc}</p>
            {/* 차량 이미지 영역 */}
            <img src={imgSrc} className={styles.carImg} alt="리뷰 차량 이미지" />
            {/* 차량 정보 영역 */}
            <p className={styles.carInfo}>{carInfo}</p>
        </div>
    );
}

export default ReviewItem;