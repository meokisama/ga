import React, { useState, useEffect } from 'react';

import './Header.scss';
import banner from '../../assets/mignon.jpg'

function Header() {

    const [imgHeight, setImgHeight] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const imgElement = document.getElementById('banner');
            if (imgElement) {
                const newImgHeight = imgElement.clientHeight;
                setImgHeight(newImgHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        // Gọi hàm handleResize khi component được mount để có giá trị ban đầu
        handleResize();

        // Hủy sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='header'>
            <img id='banner' src={banner} alt='Ranobe Giveaway Booster' />
            <div style={{ height: imgHeight }}></div>
        </div>
    )
}

export default Header