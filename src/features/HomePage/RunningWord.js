import React from 'react'
import '../styles/RunningWord.css';

function RunningWord() {
    return (
        <div className='scroll'>
            <div className='slide'>
                <p className='scrollword'><span className='runningitem'>ENJOY YOUR WONDERFUL DONUTS TIME ! </span><span className='runningitem'>ENJOY WONDERFUL DONUTS TIME !</span> <span className='runningitem'> ENJOY WONDERFUL DONUTS TIME !</span><span className='runningitem'> ENJOY WONDERFUL DONUTS TIME !</span>  </p>
                <p className='scrollword'><span className='runningitem'>ENJOY YOUR WONDERFUL DONUTS TIME ! </span><span className='runningitem'>ENJOY WONDERFUL DONUTS TIME !</span> <span className='runningitem'> ENJOY WONDERFUL DONUTS TIME !</span><span className='runningitem'> ENJOY WONDERFUL DONUTS TIME !</span>  </p>
                {/* <p className='scrollword'>ENJOY WONDERFUL DONUTS TIME ! ENJOY WONDERFUL DONUTS TIME !  ENJOY WONDERFUL DONUTS TIME ! ENJOY WONDERFUL DONUTS TIME !  </p> */}
            </div>
        </div>
    )
}

export default RunningWord
