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
import Sliders from './Sliders';
import DonutHome from './DonutHome';
import jumpIcon from '../imgs/fork.svg'

function Home() {

    const [scrollTop,setScrollerTop] = useState(0);
    const [controlName,setControlName] = useState(false);

    const jumptoup = function(){
        setControlName(true);
        window.setTimeout(function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', 
                });
            setControlName(false);
        }, 1000);
    }

   

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (window.innerWidth < 768) {
                // 手機版調整滾動比例
                setScrollerTop(scrollTop / 50); // 調整比例值以適應手機滾動
            } else {
                // 桌面版保持原樣
                setScrollerTop(scrollTop / 100);
            }
  
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
        else if(scrollTop >=6 && scrollTop <14 ){

        
            return styles.classshowup6
        }
        else if(scrollTop >=14 && scrollTop <22){
            return styles.classshowup7

        }
        else{
            return styles.classshowup13

        }
    }

 

    return (
        <div className={styles.homesec}>
            <div className={changeclassname()}>
                <Nav ></Nav>
            </div>
            
            <div className={styles.home}>
                <DonutHome></DonutHome>
                <WordsChanges scrollTop={scrollTop}></WordsChanges>
                {/* <PancakeSlider></PancakeSlider> */}
                <RunningWord></RunningWord>
                <DropingSlider></DropingSlider>
                {/* <BridgeSlider></BridgeSlider> */}
                <div className={controlName?styles.jumping:styles.jump} onClick={jumptoup}><img src={jumpIcon}></img></div>

                

            </div>


        </div>

    )
}

export default Home
