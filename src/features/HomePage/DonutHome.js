import React from 'react'
import styles from '../styles/Home.module.css';
import friends from '../imgs/truefriends.svg';


function DonutHome() {
    return (
        <div>
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
        </div>
    )
}

export default DonutHome
