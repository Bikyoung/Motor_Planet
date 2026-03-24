import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import RecommendItem from "./RecommendItem";

import { RecommendItems } from "./data";

import styles from "./Recommend.module.css";

const swiperGap = {
    mobile: 8,
    tablet: 10
}

function Recommend() {
    return (
        <section className={`section bg-[#064FB7] ${styles.section}`} id="recommendSec" data-component="recommend">
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-delay="300" data-aos-offset="400">
                    모토플래닛의 <br className="block laptop:hidden" /><span className="font-extrabold">특가 차량</span>을 만나보세요
                </h2>
                <Swiper 
                    className={`w-full laptop:w-fit ${styles.recommendList}`}
                    modules={[Pagination]}
                    spaceBetween={swiperGap.mobile}
                    slidesPerView="auto"
                    pagination={{clickable: true}}
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
                >
                    {RecommendItems.map(item => (
                        <SwiperSlide key={item.title} className={styles.recommendSlide}>
                            <RecommendItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <a href="#" className={`inline-block px-20 py-10 ${styles.recommendCta}`}>
                    더 많은 차량 보기
                </a>
            </div>
        </section>
    );
}

export default Recommend;