import React, { useState, useEffect } from 'react';

import './Header.scss';
import banner from '../../assets/mignon.jpg'
import bubble from "../../assets/bubble.png"
import logo from "../../assets/logo.png"

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

        const handleImageLoad = () => {
            const imgElement = document.getElementById('banner');
            if (imgElement) {
                // Lấy chiều cao của thẻ img khi hình ảnh đã tải xong
                const newImgHeight = imgElement.clientHeight;
                setImgHeight(newImgHeight);
            }
        };

        const imgElement = document.getElementById('banner');
        if (imgElement) {
            imgElement.addEventListener('load', handleImageLoad);
        }

        // Gọi hàm handleResize khi component được mount để có giá trị ban đầu
        handleResize();

        // Hủy sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (imgElement) {
                imgElement.removeEventListener('load', handleImageLoad);
            }
        };
    }, []);

    return (
        <div className='header'>
            <img id='banner' src={banner} alt='Ranobe Giveaway Booster' />
            <img id='headerLogo' alt='Logo' src={logo} />
            <img id='bubbleLogo1' alt='bubble' src={bubble} />
            <img id='bubbleLogo2' alt='bubble' src={bubble} />
            <img id='bubbleLogo3' alt='bubble' src={bubble} />
            <img id='bubbleLogo4' alt='bubble' src={bubble} />
            <div style={{ height: imgHeight }}></div>
            <div className="bubbles">
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
                <div className="bubble"><img alt='bubble' src={bubble} /></div>
            </div>
        </div>
    )
}

export default Header