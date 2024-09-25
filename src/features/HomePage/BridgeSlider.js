import React from 'react'
import styles from '../styles/Bridge.module.css'
import  { useEffect, useState } from 'react';

function BridgeSlider() {

    const [scrollTop,setScrollerTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollerTop(scrollTop / 100);
            console.log('scrollTop',scrollTop/100 + '%');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            
        }
    }, [])

    const changeclassname = function(){
        if(scrollTop >=5 && scrollTop <7){
            return styles.class5
        }else if(scrollTop >=8){
            return styles.class8
        }else{
            return styles.bridgetex
        }
    }

    return (
        <div className={styles.bridge} >
            <p className={changeclassname()}>A PLUFFY DONUT</p>
        </div>
    )
}

export default BridgeSlider
