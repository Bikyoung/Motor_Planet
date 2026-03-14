import styles from './Hero.module.css';
import heroImg from '../../assets/images/hero-image.webp';

function Hero() {
    return (
        <section className="section bg-[#0869F4]" data-component="hero">
            <div className={`content-wrapper ${styles.heroContentWrapper}`}>
                <div className="title-wrapper">
                    <p className={styles.heroSubTitle}>
                        좋은 차량을 가장 현명한 조건으로
                    </p>
                    <h1 className={styles.heroMainTitle}>
                        합리적인 <span className="font-extrabold">가격</span>,<br className="block tablet:hidden" /> <span className="font-extrabold">검증</span>된 중고차
                    </h1>
                </div>
                <div className="w-full relative">
                    <img src={heroImg} className={`relative z-20 mx-auto ${styles.heroImage}`} alt="모토플래닛 중고차 히어로 차량" />
                    <p className={`w-full absolute top-1/2 left-1/2 z-10 -translate-1/2 ${styles.heroGiant}`}>MOTOR PLANET</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
