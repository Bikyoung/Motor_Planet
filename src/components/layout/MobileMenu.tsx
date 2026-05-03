import Portal from "../ui/Portal/Portal";

type Props = {
    isShow: boolean;
    closeMobileMenu: () => void;
};

export default function MobileMenu({isShow, closeMobileMenu}: Props) {
    return (
        <Portal targetId="portal-root">
            <div id="mobile-menu" className={`fixed inset-0 z-100 bg-blue transition-translate duration-300 ease-in-out ${isShow ? "translate-x-0" : "-translate-x-full"}`} aria-label="모바일 메뉴" role="dialog" aria-modal="true">
                <div className="content-wrapper gap-0">
                    <div className="flex flex-row items-center justify-between w-full py-xs border-b">
                        <a href="/" className="logo">MOTOR PLANET</a>
                        <button type="button" className="toggle-btn" onClick={closeMobileMenu} aria-label="메뉴 닫기">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[1em] h-[1em]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="py-lg" aria-label="주요 메뉴">
                        <ul className="flex flex-col items-center gap-md">
                            <li><a href="#difference" className="menu" onClick={closeMobileMenu}>핵심 가치</a></li>
                            <li><a href="#inspection" className="menu" onClick={closeMobileMenu}>안심 점검</a></li>
                            <li><a href="#recommend" className="menu" onClick={closeMobileMenu}>추천 차량</a></li>
                            <li><a href="#review" className="menu" onClick={closeMobileMenu}>고객 리뷰</a></li>
                            <li><a href="#contact" className="menu" onClick={closeMobileMenu}>1:1 문의</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Portal>
    );
}