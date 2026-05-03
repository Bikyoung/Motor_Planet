import type { IReviewItem } from "./types.ts";
import ratingImg from "../../../assets/images/rating.webp";

export default function ReviewItem({customer, desc, imgSrc, carInfo}: IReviewItem) {
    return (
        <article className="card review-item">
            {/* 메타 영역 (별점 이미지 + 고객명) */}
            <div className="flex items-center justify-between w-full">
                <img src={ratingImg} className="inline-block w-[clamp(10rem,9.376rem+1.301vw,10.938rem)]" alt="고객 만족도 별점 5점 만점" />
                <span className="text-gray text-body-sm font-medium">{customer} 고객님</span>
            </div>
            {/* 리뷰 글 영역 */}
            <blockquote><p className="text-black text-body-md">{desc}</p></blockquote>
            {/* 차량 이미지 영역 */}
            <img src={imgSrc} className="w-[clamp(17.5rem,16.669rem+2.776vw,20rem)]" alt={`${carInfo.split("·")[0]} 차량`} />
            {/* 차량 정보 영역 */}
            <p className="text-[#7D7D7D] text-body-sm font-medium">{carInfo}</p>
        </article>
    );
}

