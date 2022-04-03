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
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 place-self-center justify-self-end">
                   <SiTwitter size={32}/>
                   <SiYoutube size={32}/>
                    <SiFacebook size={32}/>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
