import type { IRecommendItem } from "./types";
import { recommendImages } from "../../assets/images/index";

const { car01Img, car02Img, car03Img, car04Img, car05Img, car06Img } = recommendImages;

export const RecommendItems: IRecommendItem[] = [
    {
        imgSrc: car01Img,
        specs: ["준형세단", "휘발유"],
        title: "현대 쏘나타 디 엣지",
        date: "25년 11월",
        distance: 14103,
        cost: 2450
    },
    {
        imgSrc: car02Img,
        specs: ["준중형 SUV", "전기"],
        title: "현대 아이오닉 5 N",
        date: "23년 09월",
        distance: 18718,
        cost: 5400
    },
    {
        imgSrc: car03Img,
        specs: ["준중형 SUV", "하이브리드"],
        title: "현대 투싼",
        date: "24년 12월",
        distance: 5527,
        cost: 3680
    },
    {
        imgSrc: car04Img,
        specs: ["소형 SUV", "가솔린"],
        title: "현대 코나",
        date: "25년 11월",
        distance: 349,
        cost: 2610
    },
    {
        imgSrc: car05Img,
        specs: ["준대형세단", "휘발유"],
        title: "현대 그랜저",
        date: "23년 02월",
        distance: 17426,
        cost: 3340
    },
    {
        imgSrc: car06Img,
        specs: ["중형 SUV", "수소"],
        title: "현대 디 올 뉴 넥쏘 ",
        date: "25년 11월",
        distance: 16726,
        cost: 7100
    }
];