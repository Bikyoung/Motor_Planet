import DifferenceItem from "./DifferenceItem";
import { differenceItems } from "./data";

function Difference() {
    return (
        <section className="section bg-[#075FDC]" id="differenceSec" data-component="difference">
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-delay="200" data-aos-offset="300">
                    왜 <span className="font-extrabold">모토플래닛</span>인가요?
                </h2>   
                <ul className="w-full flex flex-col gap-sm">
                    {differenceItems.map(item => <DifferenceItem key={item.id} {...item}/>)}
                </ul>
            </div>
        </section>
    )
}

export default Difference;