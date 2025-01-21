import { FC } from "react";
import styles from "./navbar.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

interface INavbarCompProps {}

export const Navbar: FC<INavbarCompProps> = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo_div}>
                <img
                    src="../../../assets/logo/header_logo.png"
                    alt=""
                    className={styles.logo}
                />
            </div>
            <div className={styles.navbar}>
                <ul className={styles.menu}>
                    <li className={styles.list_item}>
                        <a href="/" className="link">
                            Used Cars
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className="link">
                            New Cars
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className="link">
                            Auctions
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.link}>
                            Sell
                        </a>
                    </li>
                </ul>
                <IoIosCloseCircle className={`${styles.icon_close} icon`} />
            </div>
            <div className={`${styles.sign_up} flex`}>
                <div className={styles.text}>Sign Up</div>
                <TbGridDots className={`${styles.toggleNavbarIcon} icon`} />
            </div>
        </div>
    );
};
