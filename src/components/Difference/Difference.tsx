import type { ReactNode } from "react";
import { DifferenceImages } from "../../assets/images/index";
import DifferenceItem from "./DifferenceItem";

export interface IDifferenceItem {
    id: number;
    imgSrc: string;
    title: ReactNode;
    desc: ReactNode;
}

const {chatImg, checkImg, moneyImg, noImg} = DifferenceImages;
const differenceItems: IDifferenceItem[] = [
    {
        id: 1,
        imgSrc: checkImg,
        title: <>철저한 <span className="text-(--color-yellow)">차량 검수</span></>,
        desc: <>전문가의 다단계 점검을 <br className="block tablet:hidden" />거친 차량만 판매합니다.</>
    },
    {
        id: 2,
        imgSrc: moneyImg,
        title: <><span className="text-(--color-yellow)">투명한 가격</span> 정책</>,
        desc: <>숨겨진 비용 없이 <br className="block tablet:hidden" />명확한 가격을 안내합니다.</>
    },
    {
        id: 3,
        imgSrc: noImg,
        title: <><span className="text-(--color-yellow)">허위매물 없는</span> 운영</>,
        desc: <>실제 보유 차량만 등록합니다.</>
    },
    {
        id: 4,
        imgSrc: chatImg,
        title: <><span className="text-(--color-yellow)">고객 중심</span> 상담</>,
        desc: <>상황에 맞는 차량을 제안합니다.</>
    }
];

function Difference() {
    return (
        <section className="section bg-[#075FDC]" data-component="difference">
            <div className="content-wrapper">
                <h2 className="section-title">
                    왜 <span className="font-extrabold">모토플래닛</span>인가요?
                </h2>   
                <ul className="w-full flex flex-col gap-(--spacing-sm)">
                    {differenceItems.map(item => <DifferenceItem key={item.id} {...item}/>)}
                </ul>
            </div>
        </section>
    )
}

export default Difference;