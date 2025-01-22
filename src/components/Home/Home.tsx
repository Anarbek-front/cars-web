import { FC } from "react";
import styles from "./home.module.scss";
import homeImg from "../../../assets/image/toyota_mark.png";

interface IHomeCompProps {}

export const Home: FC<IHomeCompProps> = () => {
    return (
        <div className={styles.home}>
            <div className={styles.sec_container}>
                <div className={styles.home_text}>
                    <span className={styles.home_span}>Meet your new car</span>
                    <h1 className={styles.home_title}>Toyota Mark 2 JZX90</h1>
                    <div className={`${styles.btns} flex`}>
                        <button className={styles.btn}>More Details</button>
                        <button className={`${styles.btn} primaryBtn`}>
                            Test drive
                        </button>
                    </div>
                </div>
                <div className={styles.home_img}>
                    <img src={homeImg} alt="" />
                </div>
            </div>
        </div>
    );
};
