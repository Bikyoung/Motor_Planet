import Portal from "../Portal/Portal";
import styles from "./PrivacyModal.module.css";

type Props = {
    isOpen: boolean;
    closeModal: () => void;
};

export default function PrivacyModal({isOpen, closeModal}: Props) {
    // isOpen이 false라면 모달 닫힘
    if(!isOpen) return null;

    return (
        <Portal targetId="portal-root">
            <div className="fixed inset-0 z-150 flex items-center justify-center bg-black/70">
                <div className="w-3/4 p-sm bg-white text-black rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-card-title">개인정보 수집 및 이용 동의</h3>
                        <button className="toggle-btn" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[1em] h-[1em]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <p className="pt-sm pb-xs">
                            모토플래닛은 원활한 상담 및 문의 응대를 위해 아래와 같이 개인정보를 수집·이용합니다.
                        </p>
                        <ol>
                            <li className={styles.privacyItem}>
                                <p className={styles.privacyTitle}>수집 항목</p>
                                <ul className={styles.privacyDescList}>
                                    <li className={styles.privacyDesc}>이름</li>
                                    <li className={styles.privacyDesc}>연락처</li>
                                    <li className={styles.privacyDesc}>희망 차종</li>
                                    <li className={styles.privacyDesc}>문의 내용</li>
                                </ul>
                            </li>
                            <li className={styles.privacyItem}>
                                <p className={styles.privacyTitle}>수집 및 이용 목적</p>
                                <ul className={styles.privacyDescList}>
                                    <li className={styles.privacyDesc}>중고차 관련 상담 및 문의 응대</li>
                                    <li className={styles.privacyDesc}>고객 요청사항 처리 및 안내</li>
                                </ul>
                            </li>
                            <li className={styles.privacyItem}>
                                <p className={styles.privacyTitle}>보유 및 이용 기간</p>
                                <ul className={styles.privacyDescList}>
                                    <li className={styles.privacyDesc}>
                                        상담 완료 후 최대 1년간 보관 후 파기<br />
                                        (단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관)
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.privacyItem}>
                                <p className={styles.privacyTitle}>동의를 거부할 권리 및 불이익</p>
                                <ul className={styles.privacyDescList}>
                                    <li className={styles.privacyDesc}>이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다.</li>
                                    <li className={styles.privacyDesc}>단, 동의를 거부할 경우 상담 및 문의 서비스 이용이 제한될 수 있습니다.</li>
                                </ul>
                            </li>
                        </ol>
                        <p className={styles.privacyDesc}>
                            모토플래닛은 수집된 개인정보를 위 목적 외의 용도로 사용하지 않으며, 관련 법령을 준수하여 안전하게 관리합니다.
                        </p>
                    </div>
                </div>
            </div>
        </Portal>
    );
}