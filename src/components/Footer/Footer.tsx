import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className="w-full py-md bg-[#021634]">
            <div className="content-wrapper items-start gap-8 laptop:gap-10">
                <p className={styles.footerDesc}>사업자: 모토플래닛(주) | 대표: 홍길동</p>
                <p className={styles.footerDesc}>평일 오전10시 ~ 오후6시 / 토.일.공휴일 휴무</p>
                <address className={`not-italic ${styles.footerDesc}`}>
                    대표전화 : 0000-000-0000 | 주소 : 서울특별시 강남구
                </address>
                <p className={styles.footerDesc}>
                    사업자등록번호 : 000-00-00000 | 통신판매업 신고번호 : 0000-00000
                </p>
                <p className={styles.footerDesc}>ⓒ Mortor Planet. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;