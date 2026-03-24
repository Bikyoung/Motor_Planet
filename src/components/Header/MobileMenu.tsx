import { menuItems } from "./data";
import styles from "./Header.module.css";

function MobileMenu({onClose}: {onClose: () => void}) {
    return (
        <div className="w-full h-screen absolute inset-0 z-150 bg-[#0869F4]">
            <div className="content-wrapper">
                <div className="w-full py-sm flex flex-row justify-between items-center gap-0">
                    <a href="#heroSec" className={styles.logo}>
                        MOTOR PLANET
                    </a>
                    <button className={styles.menuBtn} onClick={ onClose }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-25 tablet:size-30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col items-center gap-md">
                        {menuItems.map(item => 
                            <li>
                                <a href={`#${item.id}`} className={styles.menu}>{item.label}</a>
                            </li>    
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;