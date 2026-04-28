import type { IReviewItem } from "./types";
import { reviewImages } from "../../../assets/images/index";

const { review01Img, review02Img, review03Img, review04Img, review05Img, review06Img } = reviewImages; 

export const reviewItems: IReviewItem[] = [
    {
        id: 1,
        customer: "김**",
        desc: "사고이력과 보험처리 내역을 투명하게 보여주셔서 안심하고 계약했습니다. 성능점검표 설명도 자세해서 중고차였지만 걱정이 없었습니다.",
        imgSrc: review01Img,
        carInfo: "2021 아반떼 1.6 가솔린 · 54,000km"
    },
    {
        id: 2,
        customer: "이**",
        desc: "사고 여부와 판금 도색 부분을 먼저 안내해주셔서 신뢰가 갔습니다. 추가 비용 없이 안내받은 조건 그대로 계약이 진행되어 좋았습니다.",
        imgSrc: review02Img,
        carInfo: "2019 쏘렌토 2.0 디젤 · 35,800km"
    },
    {
        id: 3,
        customer: "윤**",
        desc: "허위광고 없이 실제 차량을 그대로 확인할 수 있어 좋았습니다. 사고이력과 교환 부위 설명도 솔직해서 편하게 결정했습니다.",
        imgSrc: review03Img,
        carInfo: "2020 아우디 A4 2.0 TFSI · 가솔린 · 42,000km"
    },
    {
        id: 4,
        customer: "박**",
        desc: "보험이력과 정비 기록을 꼼꼼하게 설명해주셔서 믿음이 생겼습니다. 출고 전 마지막 점검 과정까지 공유해주셔서 더욱 안심되었습니다.",
        imgSrc: review04Img,
        carInfo: "2022 BMW 320i · 가솔린 · 27,000km"
    },
    {
        id: 5,
        customer: "최**",
        desc: "성능점검기록부를 하나하나 설명해주셔서 이해하기 쉬웠습니다. 주행거리와 관리 상태도 투명하게 확인할 수 있어 만족했습니다.",
        imgSrc: review05Img,
        carInfo: "2021 카니발 2.2 디젤 · 59,000km"
    },
    {
        id: 6,
        customer: "정**",
        desc: "허위매물이 아닌 실매물을 직접 확인하고 진행해 신뢰가 갔습니다. 차량 하부 상태와 교환 부위까지 솔직하게 안내해주셔서 만족했습니다.",
        imgSrc: review06Img,
        carInfo: "2019 그랜저 IG 하이브리드 · 48,000km"
    }
]