import styles from "./Inspection.module.css";
import inspectionBg from "../../assets/images/inspection-bg.webp";

function Inspection() {
    return (
        <section className={`relative py-2xl ${styles.inspectionSection}`} id="inspectionSec" style={{backgroundImage: `url(${inspectionBg})`}} data-component="inspection">
            <div className="content-wrapper relative z-20 gap-0">
                <h2 className="mb-xs sec-title" data-aos="fade-up" data-aos-delay="200" data-aos-offset="500">
                    <span className="font-extrabold">168</span>가지 항목 점검
                </h2>
                <p className="text-body-xl text-center" data-aos="fade-up" data-aos-delay="400" data-aos-offset="500">
                    <span className="font-extrabold">보이지 않는 곳까지</span> <br className="block laptop:hidden" />확인합니다.
                </p>
            </div>
        </section>
    );
}

export default Inspection;