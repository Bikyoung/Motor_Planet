import styles from "./Contact.module.css";

function PrivacyModal({onClose}: {onClose: () => void}) {
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-250 flex justify-center items-center bg-[rgba(0,0,0,0.8)]">
            <div className={`w-[70%] ${styles.modal}`} role="dialog" aria-modal="true">
                <div className="p-md flex justify-between items-center">
                    <h3 className={styles.modalTitle}>개인정보 수집 <br className="tablet:hidden"/>및 이용 동의</h3>
                    <button className={styles.menuBtn} onClick={ onClose }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="size-25 tablet:size-30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-md bg-[#f0f0f0]">
                    <p className={styles.modalDesc}>
                        &lt;모토플래닛&gt; (이하 ‘업체’)은 고객님에게 원활한 서비스 제공을 위하여 다음과 같이 개인정보를 수집 및 이용합니다.
                    </p>
                    <div className={styles.modalDesc}>
                        1. 개인정보 수집 / 이용목적 - 문의 등록, 답변 안내<br />
                        2. 수집하는 개인정보의 항목 - 이름, 휴대전화 번호<br />
                        3. 개인정보의 보유 / 이용기간<br />
                        수집된 개인정보는 원칙적으로 문의 후 1년 보관 후 파기합니다.<br /> 단, 소비자 불만 / 분쟁 처리 기록의 경우 전자상거래 등에서의 소비자 보호에 관한 법률에 의하여 3년 동안 정보를
                        보관합니다.
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default PrivacyModal;