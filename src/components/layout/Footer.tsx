type Props = {
    openModal: () => void;
};

export default function Footer({openModal}: Props) {
    return (
        <footer className="w-full py-md bg-[#021634]">
            <div className="content-wrapper items-start gap-sm">
                <a href="/" className="text-[#CCCCCC] logo">MOTOR PLANET</a>
                <div className="flex flex-col items-start gap-[8px] text-gray text-body-sm laptop:gap-[10px]">
                    <p>
                        모토플래닛 <button type="button" className="text-white" onClick={openModal}>이용약관 · 개인정보 처리방침</button>
                    </p>
                    <address className="flex flex-col items-start gap-[8px] not-italic laptop:gap-[10px]">
                        <p>사업자: 모토플래닛(주) | 대표: 홍길동</p>
                        <p>대표전화 : 0000-000-0000 | 주소 : 서울특별시 강남구</p> 
                    </address>
                    <p>평일 오전10시 ~ 오후6시 / 토.일.공휴일 휴무</p>
                    <p>사업자등록번호 : 000-00-00000 | 통신판매업 신고번호 : 0000-00000</p>
                    <small>ⓒ Motor Planet. All Rights Reserved.</small>
                </div>
            </div>
        </footer>
    );
}