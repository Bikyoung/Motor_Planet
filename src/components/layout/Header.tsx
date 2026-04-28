import { useState, useEffect } from "react";

type Props = {
    openMobileMenu: () => void;
};

export default function Header({openMobileMenu}: Props) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 left-0 z-50 w-full py-xs ${isScrolled ? "bg-[rgba(0,34,129,0.85)]" : "bg-blue" }`}>
            <div className="content-wrapper flex-row justify-between">
                <a href="/" className="logo">MOTOR PLANET</a>
                <nav className="hidden laptop:block" aria-label="주요 메뉴">
                    <ul className="flex gap-sm">
                        <li><a href="#difference" className="menu">핵심 가치</a></li>
                        <li><a href="#inspection" className="menu">안심 점검</a></li>
                        <li><a href="#recommend" className="menu">추천 차량</a></li>
                        <li><a href="#review" className="menu">고객 리뷰</a></li>
                        <li><a href="#contact" className="menu">1:1 문의</a></li>
                    </ul>
                </nav>
                <button type="button" className="laptop:hidden toggle-btn" onClick={openMobileMenu} aria-label="메뉴 열기">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[1em] h-[1em]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
}