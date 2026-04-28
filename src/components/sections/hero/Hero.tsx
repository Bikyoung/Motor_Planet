import heroImg from "../../../assets/images/hero-image.webp";

export default function Hero() {
    return (
        <section className="section bg-[#0869F4]" data-component="hero">
            <div className="gap-xl content-wrapper">
                <div className="title-wrapper">
                    <p className="text-[clamp(1.25rem,0.793rem+1.527vw,2.625rem)] text-center leading-tight tracking-[-0.01em]">
                        좋은 차량을 가장 현명한 조건으로
                    </p>
                    <h1 className="mt-xs text-body-xl text-center">
                        합리적인 <span className="font-extrabold">가격</span>,<br className="block tablet:hidden" /> <span className="font-extrabold">검증</span>된 중고차
                    </h1>
                </div>
                <div className="relative w-full">
                    <img src={heroImg} className="relative z-20 w-[clamp(17.5rem,8.774rem+29.146vw,43.75rem)] mx-auto" alt="모토플래닛 중고차 히어로 차량" />
                    <p className="absolute top-1/2 left-1/2 z-10 -translate-1/2 w-full text-[clamp(2.625rem,0.822rem+8.013vw,10.438rem)] text-center text-[#0237B2] font-extrabold leading-[1.1] tracking-[-0.01em]">MOTOR PLANET</p>
                </div>
            </div>
        </section>
    );
}

