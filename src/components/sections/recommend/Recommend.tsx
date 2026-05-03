import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import RecommendItem from "./RecommendItem";

import { RecommendItems } from "./data";

import styles from "./Recommend.module.css";

const swiperGap = {
    mobile: 8,
    tablet: 10
}

export default function Recommend() {
    return (
        <section id="recommend" className={`section bg-[#064FB7] ${styles.section}`}>
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-delay="400">
                    모토플래닛의 <br className="block laptop:hidden" /><span className="font-extrabold">특가 차량</span>을 만나보세요
                </h2>
                <Swiper 
                    className={`w-full laptop:w-fit ${styles.recommendList}`}
                    modules={[Pagination, A11y, Keyboard]}
                    spaceBetween={swiperGap.mobile}
                    slidesPerView="auto"
                    pagination={{clickable: true}}
                    a11y={{ 
                        enabled: true,
                        slideLabelMessage: '{{index}} / {{slidesLength}}'
                     }}
                    keyboard={{ enabled: true }}
                    enabled={true}
                    breakpoints={{
                        480: {
                            // 해상도 변경 시 swiper가 정상적으로 다시 활성화되도록 보장
                            enabled: true,  
                            spaceBetween: swiperGap.tablet
                        },
                        768: {
                            enabled: false,
                            spaceBetween: 0
                        }
                    }}
                    data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500"
                >
                    {RecommendItems.map(item => (
                        <SwiperSlide key={item.title} className="w-[clamp(17.5rem,16.253rem+4.164vw,21.25rem)]">
                            <RecommendItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <a href="/" className={`inline-block px-20 py-10 text-body-lg border rounded-full transition-all duration-500 ease-in-out ${styles.recommendCta}`} data-aos="zoom-in" data-aos-anchor-placement="center-center" data-aos-easing="ease-in-out" data-aos-delay="550">
                    더 많은 중고차 보기
                </a>
            </div>
        </section>
    );
}

