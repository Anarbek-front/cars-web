import { FC, useEffect, useRef, useState } from "react";
import styles from "./navbar.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

interface INavbarCompProps {}

export const Navbar: FC<INavbarCompProps> = () => {
    // navbar state
    const [navbar, setNavbar] = useState<boolean>(false);
    const dropdownNavbar = useRef<HTMLDivElement>(null);

    // navbar show function
    const showNavbar: () => void = () => {
        setNavbar(true);
    };

    // navbar close func
    const closeNavbar: () => void = () => {
        setNavbar(false);
        if (
            dropdownNavbar.current &&
            !dropdownNavbar.current.contains(event?.target as Node)
        ) {
            setNavbar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeNavbar);
        return () => {
            document.removeEventListener("mousedown", closeNavbar);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.logo_div}>
                <img
                    src="../../../assets/logo/header_logo.png"
                    alt=""
                    className={styles.logo}
                />
            </div>
            <div
                className={`${styles.navbar} ${
                    navbar ? styles.showNavbar : ""
                }`}
                ref={dropdownNavbar}
            >
                <ul className={styles.menu}>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.link}>
                            Used Cars
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.link}>
                            New Cars
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.link}>
                            Auctions
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.link}>
                            Sell
                        </a>
                    </li>
                </ul>
                <IoIosCloseCircle
                    className={`${styles.icon_close} icon`}
                    onClick={closeNavbar}
                />
            </div>
            <div className={`${styles.sign_up} flex`}>
                <div className={styles.text}>Sign Up</div>
                <TbGridDots
                    className={`${styles.toggleNavbarIcon} icon`}
                    onClick={showNavbar}
                />
            </div>
        </div>
    );
};
