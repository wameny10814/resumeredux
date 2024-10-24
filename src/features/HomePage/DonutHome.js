import React from 'react'
import styles from '../styles/Home.module.css';
import friends from '../imgs/truefriends.svg';


function DonutHome() {
    return (
        <div className={styles.secs}>
            <div className={styles.homebannerSec}>
            </div>
            <video className={styles.bgvideo}
                src="https://cxc421.github.io/draw-lots/static/media/smoke.9c21ff18.mp4" autoPlay="autoplay" muted={true} loop={true}> 
            </video>
            <div className={styles.bannerwords}>
                    <p className={styles.bannerTitle}>讓 每 一 口 <br></br><br></br><br></br>令 人 無 法 抗 拒 的 幸 福 好 滋 味</p>
                    <div className={styles.homebannerwalkerMask}><div className={styles.homebannerwalkerinner}></div></div>
                    <div className={styles.homebannerwalkerSec}>
                        {/* <div className={styles.walkersTextSec}>
                            <p className={styles.walkersTitle}>G O O D T I M E</p>
                        </div> */}
                        <div className={styles.walkers}>
                            <img src={friends}></img>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DonutHome
