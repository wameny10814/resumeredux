import React, { useState } from "react";
import "../styles/Wheel.css"; // 記得引入 CSS

const prizes = ["5% 折扣", "10% 折扣", "再來一次！", "沒中獎 😭"];

const Wheel = ({ applyDiscount }) => {
    const [angle, setAngle] = useState(0);
    const [spinning, setSpinning] = useState(false);

    const spinWheel = () => {
        if (spinning) return;
        setSpinning(true);

        let newAngle = angle + 3600 + Math.floor(Math.random() * 360);
        setAngle(newAngle);

        setTimeout(() => {
            let finalAngle = newAngle % 360;
            let prizeIndex = Math.floor(finalAngle / 60);
            let prize = prizes[prizeIndex];

            alert(`🎉 你獲得了：${prize}`);
            if (prize !== "沒中獎 😭" && prize !== "再來一次！") {
                applyDiscount(prize);
            }

            setSpinning(false);
        }, 4000);
    };

    return (
        <div className="wheel-container">
            <div className="wheel" style={{ transform: `rotate(${angle}deg)` }} />
            <button onClick={spinWheel} disabled={spinning}>🎡 轉動輪盤</button>
        </div>
    );
};

export default Wheel;
