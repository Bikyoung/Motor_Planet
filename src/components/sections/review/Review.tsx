import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";

import ReviewItem from "./ReviewItem";

import { reviewItems } from "./data";

const swiperGap = {
    mobile: 20,
    laptop: 25,
    desktop: 30
}

export default function Review() {
    return (
        <section id="review" className="section bg-[#0547A5]">
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-delay="400" data-aos-easing="ease-in">
                    구매 고객의 <br className="block laptop:hidden"/><span className="font-extrabold">실제 후기</span>를 확인해보세요
                </h2>
                <Swiper 
                    className="w-full"
                    modules={[Autoplay]}
                    spaceBetween={swiperGap.mobile}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 800
                    }}
                    breakpoints={{
                        768: {
                            spaceBetween: swiperGap.laptop
                        },
                        1024: {
                            spaceBetween: swiperGap.desktop
                        }
                    }}
                >
                    {
                        reviewItems.map(item => (
                            <SwiperSlide key={item.id} className="w-[clamp(21.25rem,20.419rem+2.776vw,23.75rem)]!">
                                <ReviewItem {...item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

