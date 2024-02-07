import { useState, useEffect } from 'react';

import SectionTitle from "../SectionTitle"
import danimaru from "../../assets/danimaru.webp"
import danimaru_stack from "../../assets/danimaru_stack.webp"

import "./Countdown.scss"

function Countdown({ targetDate }) {

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="countdown">

            <SectionTitle
                title="Thời Gian"
                description="Chi tiết thời gian diễn ra sự kiện năm nay!"
                titleType="type1"
            />

            {/* {Object.keys(timeLeft).length !== 0 && <div className='timeCardWrapper'>} */}

            <div className='timeCardWrapper'>

                <img id='stackimage' alt='' src={danimaru_stack} />

                <div className='timeCard'>
                    <div className='timeHeader'>
                        <img alt='' src={danimaru} />
                    </div>

                    <div className='timeInfo'>
                        <h4>━ Thời gian dự kiến ━</h4>
                        <h2>20:00, 02/03/2024</h2>
                        <p>Trên đây là thời gian cụ thể mà chúng tôi sẽ mở link bài thi để bắt đầu làm bài, lưu ý link bài thi này sẽ được công bố trước giờ làm bài 5 phút ở trên hai trang Facebook đã được đề cập. Thể lệ bài thi cũng sẽ được ghi cụ thể ở mục tiếp theo bên dưới (chỉ cần đọc mục đầu, những cái còn lại có thể bỏ qua). </p>
                        <p>Còn sau đây là thời gian đếm ngược cho đến lúc đó!</p>
                    </div>

                    <div className='timeLeft'>
                        <div><h2>{timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}</h2><span>ngày</span></div>
                        <div><h2>{timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}</h2><span>giờ</span></div>
                        <div><h2>{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}</h2><span>phút</span></div>
                        <div><h2>{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}</h2><span>giây</span></div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Countdown;