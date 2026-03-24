import { useState } from "react";
import styles from "./Header.module.css";
import { menuItems } from "./data";
import MobileMenu from "./MobileMenu";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <> 
            <header className={`${styles.header} sticky top-0 z-100`}>
                <div className="content-wrapper py-sm flex-row justify-between gap-0">
                    <a href="#heroSec" className={styles.logo}>
                        MOTOR PLANET
                    </a>
                    <nav className="hidden laptop:block">
                        <ul className="flex gap-sm">
                            {menuItems.map(item => 
                                <li>
                                    <a href={`#${item.id}`} className={styles.menu}>{item.label}</a>
                                </li>    
                            )}
                        </ul>
                    </nav>
                    <button className={styles.menuBtn} onClick={() => {setIsOpen(true)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-25 tablet:size-30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </header>
            {isOpen && <MobileMenu onClose={() => setIsOpen(false)}/>}
        </>
    );
}

export default Header;