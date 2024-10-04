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
        
        if(scrollTop >=19){
            return styles.class8
        }else{
            return styles.bridgetex
        }
    }

    return (
        <>
            <div className={styles.bridge} >
                <p className={changeclassname()}>A PLUFFY DONUT</p>
    
            </div>
            <div className={styles.waves}>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>
            <div className={styles.wavesdot}></div>

            </div>
        </>
          
  
      
    
    )
}

export default BridgeSlider
