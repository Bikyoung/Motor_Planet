import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";

import ReviewItem from "./ReviewItem";

import { reviewItems } from "./data";

import styles from "./Review.module.css";

const swiperGap = {
    mobile: 20,
    laptop: 25,
    desktop: 30
}

function Review() {
    return (
        <section className="section bg-[#0547A5]" id="reviewSec" data-component="review">
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-delay="300" data-aos-offset="400">
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
                            <SwiperSlide key={item.id} className={styles.reviewSlide}>
                                <ReviewItem {...item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Review;