import type { IDifferenceItem } from "./types";

export default function DifferenceItem({imgSrc, title, desc}: IDifferenceItem) {
    return (
        <li className="flex items-center gap-20 px-[clamp(1.875rem,0.005rem+6.246vw,7.5rem)] bg-[#053B89] rounded-[10px] tablet:gap-md py-sm" data-aos="fade-right" data-aos-anchor-placement="bottom-center" data-aos-delay="400">
            <img src={imgSrc} className="w-[clamp(5rem,2.922rem+6.94vw,11.25rem)]" alt="" />
            <div>
                <h3 className="mb-xs text-card-title">{title}</h3>
                <p className="text-body-md">{desc}</p>
            </div>
        </li>
    );
}

