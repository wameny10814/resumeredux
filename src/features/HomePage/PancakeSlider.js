import React from 'react'
import pancakeSliderPic from '../imgs/pancakeSliderPic.png';
// import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import '../styles/PancakeSlider.css';


// const sliderimg = styled(slider).attrs({
//     src: "../imgs/pancakeSliderPic.png",
// })`;
function PancakeSlider() {
    const slider = useRef(null);
    const pancakeSliderSec = useRef(null);
    const pancakeSlider = useRef(null);


    const [ScreenY, setScreenY] = useState(0)


    useEffect(() => {

        window.addEventListener('scroll', () => {
            // console.log('scoller', window.scrollY)

            const handleScroll = () => {
                // 取得 pancakeSliderSec 元素的位置及高度
                const rect = pancakeSliderSec.current.getBoundingClientRect();
                const top = rect.top;
                const height = rect.height;
                // console.log('rect top height',top,height)               
                // 只有當 pancakeSliderSec 元素完全顯示在畫面中時，才啟用滾輪事件監聽
                if (top <= 0) {
                    setScreenY(window.scrollY);
                    console.log('scoller', window.scrollY);
                    console.log('in?');
                    //ScreenY 100(滑鼠滾輪一下)pancake下移一張圖片
                    //ScreenY 800 初始值第一張圖
                    if (ScreenY <= 900 && ScreenY >= 801) {
                        pancakeSlider.current.style.height = `640px`;
                        slider.current.style.top = `-0px`;
                        let moonMoveSpeed = Number(pancakeSliderSec.current.dataset.speed);
                        pancakeSliderSec.current.style.transform = `translateY(${(ScreenY * moonMoveSpeed) - 800}px)`;

                        console.log('2')
                    }
                    else if (ScreenY <= 1000 && ScreenY >= 901) {
                        // slider.current.style.transform = `translateY(-700px)`;
                        slider.current.style.top = '-700px';
                        // slider.current.style.top = '-700px';
                        let moonMoveSpeed = Number(pancakeSliderSec.current.dataset.speed);
                        pancakeSliderSec.current.style.transform = `translateY(${(ScreenY * moonMoveSpeed) - 800}px)`;
                        pancakeSliderSec.current.style.height = `1500px`;

                        console.log('3')
                    } else if (ScreenY <= 1100 && ScreenY >= 1001) {
                        slider.current.style.top = `-1400px`;
                        let moonMoveSpeed = Number(pancakeSliderSec.current.dataset.speed);
                        pancakeSliderSec.current.style.transform = `translateY(${(ScreenY * moonMoveSpeed) - 800}px)`;
                        pancakeSliderSec.current.style.height = `1500px`;

                        console.log('4')
                    } else if (ScreenY <= 1200 && ScreenY >= 1101) {
                        slider.current.style.top = `-2100px`;
                        pancakeSlider.current.style.height = `600px`;
                        let moonMoveSpeed = Number(pancakeSliderSec.current.dataset.speed);
                        pancakeSliderSec.current.style.transform = `translateY(${(ScreenY * moonMoveSpeed) - 800}px)`;
                        pancakeSliderSec.current.style.height = `1500px`;

                        console.log('5')
                    } else if (ScreenY <= 1300 && ScreenY >= 1201) {
                        slider.current.style.top = `-2800px`;
                        pancakeSlider.current.style.height = `600px`;
                        let moonMoveSpeed = Number(pancakeSliderSec.current.dataset.speed);
                        pancakeSliderSec.current.style.transform = `translateY(${(ScreenY * moonMoveSpeed) - 800}px)`;
                        pancakeSliderSec.current.style.height = `1500px`;
                        console.log('6')
                    } 
                    else{
                        // slider.current.style.top = `-3500px`;
                        // pancakeSlider.current.style.height = `550px`;
                        let moonMoveSpeed = Number(pancakeSliderSec.current.dataset.speed);
                        pancakeSliderSec.current.style.transform = `translateY(0px)`;
                        pancakeSliderSec.current.style.height = `(${(ScreenY * moonMoveSpeed) - 800}px)`;
                        console.log('7')
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        })
    });



    return (
        <div>
            <div ref={pancakeSliderSec} className='pancakeSliderSec' data-speed="1">
                {/* <slider>
                    <img src={pancakeSliderPic} style={{width:'100%',overflow:'hidden'}}></img>
                </slider> */}
                <div ref={pancakeSlider} className='pancakeSlider'>
                    <img ref={slider} src={pancakeSliderPic} className='pancakeSliderimg' ></img>
                </div>
            </div>
            <div style={{ height: '100px' }}>
                <p>wwwwwww</p>
            </div>
        </div>
    )
}

export default PancakeSlider
