import React from 'react'
import styles from '../styles/Home.module.css';
import homebanner from '../imgs/homebanner.jpg';
import homebannerwalker from '../imgs/homebannerwalker.png';
function Home() {
    return (
        <div>
            <div className={styles.homebannerSec}>

                <p className={styles.bannerTitle}>讓 每 一 口 <br></br><br></br>令 人 無 法抗 拒 的 幸 福 好 滋 味</p>
                {/* <p className={styles.bannerTitle}>都是幸福的好滋味。</p> */}
                <div>
                    <div>
                        <img src={homebannerwalker}></img>
                    </div>
                    <div>
                        <p>GOOD TIME</p>
                        <span>-</span><span>SINCERE FOR YOU</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
