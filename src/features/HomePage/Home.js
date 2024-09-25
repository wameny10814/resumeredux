import React from 'react'
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import homebanner from '../imgs/homebanner.jpg';
import homebannerwalker from '../imgs/homebannerwalker.png';
import friends from '../imgs/truefriends.svg';
import PancakeSlider from './PancakeSlider';
import DropingSlider from './DropingSlider';
import RunningWord from './RunningWord';
import BridgeSlider from './BridgeSlider';
import Nav from '../Nav';
import navstyle from '../styles/Nav.module.css';
import WordsChanges from './WordsChanges';

function Home() {

    const [scrollTop,setScrollerTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollerTop(scrollTop / 100);
            // console.log('scrollTop',scrollTop/100 + '%');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // 清理事件監聽器
        }
    }, [])


    const changeclassname = function(){
        if(scrollTop ===0){
            return styles.classshow0

        }else if(scrollTop >0 && scrollTop <6){
            
            return styles.classshowup
        }
        else if(scrollTop >=6 && scrollTop <13.2 ){
        
            return styles.classshowup6
        }else{
            return styles.classshowup13

        }
    }

    return (
        <div className={styles.homesec}>
            <div className={changeclassname()}>
                <Nav ></Nav>
            </div>
            
            <div className={styles.home}>
                <div className={styles.homebannerSec}>

                    <p className={styles.bannerTitle}>讓 每 一 口 <br></br><br></br><br></br>令 人 無 法 抗 拒 的 幸 福 好 滋 味</p>
                    <div className={styles.homebannerwalkerMask}></div>
                    <div className={styles.homebannerwalkerSec}>
                        <div className={styles.walkersTextSec}>
                            <p className={styles.walkersTitle}>G O O D T I M E</p>
                            {/* <div className={styles.walkersSubText}>
                                <p className={styles.walkersLine}></p>
                                <p className={styles.walkersText}>SINCERE FOR YOU</p>
                            </div> */}
                        </div>
                        <div className={styles.walkers}>
                            <img src={friends}></img>
                        </div>
                    </div>
                </div>
                <WordsChanges scrollTop={scrollTop}></WordsChanges>
                {/* <PancakeSlider></PancakeSlider> */}
                {/* <BridgeSlider></BridgeSlider> */}
                <RunningWord></RunningWord>
                <DropingSlider></DropingSlider>

            </div>

        </div>

    )
}

export default Home
