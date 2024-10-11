import React from 'react'
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/WordsChanges.module.css';
import donutsicon from '../imgs/donut-svgrepo-com.svg';

function WordsChanges(props) {
    const scrollTop = props.scrollTop;
    let str = '恬圈網站致力於打造一個溫暖、舒適的甜甜圈世界，讓每位顧客都能在享用甜點的同時，找到內心的平靜與放鬆。我們相信，甜甜圈不僅僅是一種美食 ，更是一種情感的連結， 能夠在 繁忙的 生活中為人們帶來一絲溫暖和愉悅無論是獨自享用，還是與家人朋友分享，我們的甜甜圈都希望成為您生活中輕鬆快樂的片刻。';
    str = str.split('');

    const [scrollWords,setScrollerWords] = useState(str);

    useEffect(() => {
        setScrollerWords(str);
    }, []);

    const getOpacity = (index) => {
        //要return 一個數字給opacity
        // 計算透明度
        const percentage = (index + 1) / str.length * 100;
        // console.log('scrollTop',scrollTop);

        if (scrollTop * 10 >= percentage) {
            return 1;
        }
        return Math.min(scrollTop / 10, 1); // 確保不會超過 1
    };




    

    return (
        <div className={styles.words}>
        <div className={styles.iconsec}>
            <img src={donutsicon}></img>
        </div>
        <div className={styles.wordtextsec}>

            {scrollWords.map((v,i) => {
                return (
                    <>
                        <span className={styles.wordtext} key={i} style={{ opacity: getOpacity(i) }} >{v}</span>
                    </>
                )
            })}

        </div>
        <div className={styles.iconsecbottom}>
            <img src={donutsicon}></img>
        </div>
            
        </div>
    )
}

export default WordsChanges
