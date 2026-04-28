import styles from "./Inspection.module.css";
import inspectionBg from "../../../assets/images/inspection-bg.webp";

export default function Inspection() {
    return (
        <section id="inspection" className={`relative py-2xl bg-center bg-no-repeat bg-cover ${styles.inspectionSection}`} style={{backgroundImage: `url(${inspectionBg})`}}>
            <div className="content-wrapper relative z-20 gap-0">
                <h2 className="mb-xs sec-title">
                    <span className="font-extrabold">168</span>가지 항목 점검
                </h2>
                <p className="text-center text-body-xl">
                    <span className="font-extrabold">보이지 않는 곳까지</span> <br className="block laptop:hidden" />확인합니다.
                </p>
            </div>
        </section>
    );
}
