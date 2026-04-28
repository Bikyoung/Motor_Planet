import DifferenceItem from "./DifferenceItem";
import { differenceItems } from "./data";

export default function Difference() {
    return (
        <section id="difference" className="section bg-[#075FDC]">
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
                    왜 <span className="font-extrabold">모토플래닛</span>인가요?
                </h2>   
                <ul className="flex flex-col gap-sm w-full">
                    {differenceItems.map(item => <DifferenceItem key={item.id} {...item}/>)}
                </ul>
            </div>
        </section>
    )
}

