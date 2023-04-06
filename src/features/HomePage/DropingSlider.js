import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../styles/DropingSlider.css';
import Strawberry from '../imgs/strawberry.jpg';
import Macha from '../imgs/macha.jpg';
import Sugar from '../imgs/sugar.jpg';
import RunningDonuts from '../imgs/runnungDonuts.png';


function DropingSlider() {


    const sugarele = useRef(null);
    const strawberryele = useRef(null);
    const machaele = useRef(null);
    const sliderRightPic = useRef(null);
    const DropingSliderRightPic = useRef(null);
    const RollingDonuts = useRef(null);
    const DropingSliderRight = useRef(null)


    const [SliderPic, setSliderPic] = useState('')
    const [ScreenY, setScreenY] = useState(0)

    useEffect(() => {

        sugarele.current.addEventListener('mouseover', () => {
            setSliderPic('sugar')
            DropingSliderRightPic.current.classList.remove('ChangingPicHoverOUT')
            DropingSliderRightPic.current.classList.add('ChangingPicHover')
        })

        sugarele.current.addEventListener('mouseout', () => {
            setSliderPic('sugar')
            DropingSliderRightPic.current.classList.remove('ChangingPicHover')
            DropingSliderRightPic.current.classList.add('ChangingPicHoverOUT')
        })



        machaele.current.addEventListener('mouseover', () => {
            setSliderPic('macha');
            DropingSliderRightPic.current.classList.remove('ChangingPicHoverOUT')
            DropingSliderRightPic.current.classList.add('ChangingPicHover')
        })
        machaele.current.addEventListener('mouseout', () => {
            setSliderPic('macha');
            DropingSliderRightPic.current.classList.remove('ChangingPicHover')
            DropingSliderRightPic.current.classList.add('ChangingPicHoverOUT')
        })


        strawberryele.current.addEventListener('mouseover', () => {
            setSliderPic('strawberry')
            DropingSliderRightPic.current.classList.remove('ChangingPicHoverOUT')
            DropingSliderRightPic.current.classList.add('ChangingPicHover')
        })
        strawberryele.current.addEventListener('mouseout', () => {
            setSliderPic('strawberry')
            DropingSliderRightPic.current.classList.remove('ChangingPicHover')
            DropingSliderRightPic.current.classList.add('ChangingPicHoverOUT')

        })

        /////scrolling 
    
        // window.addEventListener('scroll', () => {
        //     // 取得 pancakeSliderSec 元素的位置及高度
        //     const rect = DropingSliderRight.current.getBoundingClientRect();
        //     const top = rect.top;
        //     const height = rect.height;

        //     setScreenY(window.scrollY);
        //     console.log('scrollY', window.scrollY);
        //         if(ScreenY*1 >=0 && ScreenY*1 <=700){
        //             let moonMoveSpeed = Number(DropingSliderRight.current.dataset.speed);
        //             console.log('700<')
                
        //             RollingDonuts.current.style.transform = `rotate(10deg)`;
        //             // RollingDonuts.current.style.transform = `translateY(${(ScreenY)}-800px)`;
        //         }else if(ScreenY*1 >701){
        //             console.log('700>')
        //             RollingDonuts.current.style.transform = `rotate(-10deg)`;
        //         }
        // })

    }, [])
    return (
        <div className='DropingSliderSec'>
            {
                (() => {

                    if (SliderPic === 'sugar') {
                        return (
                            <div className='DropingSliderLeft' style={{ BackgroundColor: 'rgb(170, 92, 1)' }}>
                                <div className='DropingSliderLeftTitle'>
                                    <p className='DropingSliderLeftTitleMain'>Taste</p>
                                    <p className='DropingSliderLeftTitleMain'>Flavor</p>
                                    <p className='DropingSliderLeftTitleMain'>Savor</p>
                                    <span className='DropingSliderLeftTitleSub'>焦糖滋味</span>
                                    <span className='DropingSliderLeftText'>經典焦糖</span>
                                    <span className='DropingSliderLeftText'>微甜帶苦</span>
                                    <span className='DropingSliderLeftText'>是絕妙搭配</span>

                                </div>
                                <div ref={sugarele} className='DropingSliderLeftButtonSec'>
                                    <p className='DropingSliderLeftButtonSugar'>焦糖</p>
                                </div>
                            </div>
                        )

                    } else if (SliderPic === 'macha') {
                        return (
                            <div className='DropingSliderLeft' style={{ backgroundColor: 'rgb(126, 118, 46)' }}>
                                <div className='DropingSliderLeftTitle'>
                                    <p className='DropingSliderLeftTitleMain'>Taste</p>
                                    <p className='DropingSliderLeftTitleMain'>Flavor</p>
                                    <p className='DropingSliderLeftTitleMain'>Savor</p>
                                    <span className='DropingSliderLeftTitleSub'>京都抹茶</span>
                                    <span className='DropingSliderLeftText'>特濃抹茶</span>
                                    <span className='DropingSliderLeftText'>彷彿來到京都</span>
                                    <span className='DropingSliderLeftText'>看見那抹古韻微笑</span>

                                </div>
                                <div ref={sugarele} className='DropingSliderLeftButtonSec'>
                                    <p className='DropingSliderLeftButtonSugar'>焦糖</p>
                                </div>
                            </div>
                        )
                    } else if (SliderPic === 'strawberry') {
                        return (
                            <div className='DropingSliderLeft' style={{ backgroundColor: 'rgb(225,107,69)' }}>
                                <div className='DropingSliderLeftTitle'>
                                    <p className='DropingSliderLeftTitleMain'>Taste</p>
                                    <p className='DropingSliderLeftTitleMain'>Flavor</p>
                                    <p className='DropingSliderLeftTitleMain'>Savor</p>
                                    <span className='DropingSliderLeftTitleSub'>熱力草莓</span>
                                    <span className='DropingSliderLeftText'>來自台灣大湖</span>
                                    <span className='DropingSliderLeftText'>新鮮酸甜滋味</span>
                                    <span className='DropingSliderLeftText'>感受在地熱情</span>

                                </div>
                                <div ref={sugarele} className='DropingSliderLeftButtonSec'>
                                    <p className='DropingSliderLeftButtonSugar'>焦糖</p>
                                </div>
                            </div>

                        )
                    } else {
                        return (
                            <div className='DropingSliderLeft' style={{ backgroundColor: 'rgb(170, 92, 1)' }}>
                                <div className='DropingSliderLeftTitle'>
                                    <p className='DropingSliderLeftTitleMain'>Taste</p>
                                    <p className='DropingSliderLeftTitleMain'>Flavor</p>
                                    <p className='DropingSliderLeftTitleMain'>Savor</p>
                                    <span className='DropingSliderLeftTitleSub'>焦糖滋味</span>
                                    <span className='DropingSliderLeftText'>我是介紹詞www</span>
                                    <span className='DropingSliderLeftText'>我是介紹詞</span>
                                    <span className='DropingSliderLeftText'>我是介紹詞</span>

                                </div>
                                <div ref={sugarele} className='DropingSliderLeftButtonSec'>
                                    <p className='DropingSliderLeftButtonSugar'>焦糖</p>
                                </div>
                            </div>
                        )

                    }
                })()
            }
            {/* <div className='DropingSliderLeft'>
                <div className='DropingSliderLeftTitle'>
                    <p className='DropingSliderLeftTitleMain'>Taste</p>
                    <p className='DropingSliderLeftTitleMain'>Flavor</p>
                    <p className='DropingSliderLeftTitleMain'>Savor</p>
                    <span className='DropingSliderLeftTitleSub'>焦糖滋味</span>
                    <span className='DropingSliderLeftText'>我是介紹詞www</span>
                    <span className='DropingSliderLeftText'>我是介紹詞</span>
                    <span className='DropingSliderLeftText'>我是介紹詞</span>

                </div>
                <div ref={sugarele} className='DropingSliderLeftButtonSec'>
                    <p className='DropingSliderLeftButtonSugar'>焦糖</p>
                </div>
            </div> */}
            <div ref={DropingSliderRight} className='DropingSliderRight'>
                <div className='DropingSliderRightPic'>
                    <img ref={DropingSliderRightPic} className='DropingSliderRightPicimg' src={
                        (() => {
                            if (SliderPic === 'sugar') {
                                return Sugar

                            } else if (SliderPic === 'macha') {
                                return (
                                    Macha
                                )
                            } else if (SliderPic === 'strawberry') {
                                return (
                                    Strawberry
                                )
                            } else {
                                return Sugar

                            }
                        })()
                    }></img>
                </div>
                <div ref={machaele} className='DropingSliderLeftButtonMachaSec'>
                    <p className='DropingSliderLeftButtonMacha'>抹茶</p>
                </div>
                <div ref={strawberryele} className='DropingSliderLeftButtonStrawberrySec'>
                    <p className='DropingSliderLeftButtonStrawberry'>草莓</p>
                </div>
                <div ref={RollingDonuts} className='DropingSliderLeftRunningDonuts' data-speed="1">
                    <img src={RunningDonuts}></img>
                </div>
            </div>
        </div>
    )
}

export default DropingSlider
