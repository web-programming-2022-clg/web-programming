import React from 'react';
import Spinner from "../FeedbackApp/components/shared/Spinner";
import styles from './MainPage.module.scss'
import {SiFacebook, SiTwitter, SiYoutube} from "react-icons/si";

const MainPage = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.mywindow}>
                <div className={styles.content}><Spinner/></div>
            </div>
            <footer className={styles.basement}>
                <div className={styles.copyright}>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className={styles.socialicons}>
                   <SiTwitter size={32}/>
                   <SiYoutube size={32}/>
                    <SiFacebook size={32}/>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
