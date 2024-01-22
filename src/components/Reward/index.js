import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import "./Reward.scss"
import SectionTitle from "../SectionTitle"
import alisa from "../../assets/alisa.webp"
import liar from "../../assets/liar.webp"

function Reward() {
    return (
        <div className="wrapper">
            <div className="reward">
                <SectionTitle
                    title="Giải Thưởng"
                    description="Phần thưởng giành cho 3 người chiến thắng năm nay! Trượt sang trái/phải ở đống ảnh để xem ảnh tiếp theo!"
                    titleType="type1"
                />
                <div className="item gold">
                    <div className='goldSwiper'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            initialSlide={4}
                        >
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='goldContent'>
                        <h1>━ Giải Nhất ━</h1>
                        <h3>Dengeki Wedding 30th Anniversary Artbook</h3>
                        <p>Cuốn artbook kích cỡ A4 cho bộ ảnh kỉ niệm 30 năm của Dengeki Bunko. Bao gồm <strong>81 tấm ảnh váy cưới</strong> cho <strong>81 tác phẩm</strong> trong tổng số các ấn phẩm được xuất bản của họ trong 30 năm qua.</p>
                        <div><strong>━ Thân thiện nhắc nhở ━</strong><br /> Trượt sang trái/phải ở đống ảnh để xem thêm ảnh tiếp theo!</div>
                    </div>
                </div>
                <div className="item silver">
                    <div className='silverContent'>
                        <h1>━ Giải Nhì ━</h1>
                        <h3>Dengeki Wedding 30th Anniversary Artbook</h3>
                        <p>Cuốn artbook kích cỡ A4 cho bộ ảnh kỉ niệm 30 năm của Dengeki Bunko. Bao gồm <strong>81 tấm ảnh váy cưới</strong> cho <strong>81 tác phẩm</strong> trong tổng số các ấn phẩm được xuất bản của họ trong 30 năm qua.</p>
                        <div><strong>━ Thân thiện nhắc nhở ━</strong><br /> Trượt sang trái/phải ở đống ảnh để xem thêm ảnh tiếp theo!</div>
                    </div>
                    <div className='silverSwiper'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            initialSlide={1}
                        >
                            <SwiperSlide>Giải nhì chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải nhì chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải nhì chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải nhì chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải nhì chưa kiếm ra</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="item bronze">
                    <div className='bronzeSwiper'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            initialSlide={1}
                        >
                            <SwiperSlide>Giải ba chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải ba chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải ba chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải ba chưa kiếm ra</SwiperSlide>
                            <SwiperSlide>Giải ba chưa kiếm ra</SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='bronzeContent'>
                        <h1>━ Giải Ba ━</h1>
                        <h3>Dengeki Wedding 30th Anniversary Artbook</h3>
                        <p>Cuốn artbook kích cỡ A4 cho bộ ảnh kỉ niệm 30 năm của Dengeki Bunko. Bao gồm <strong>81 tấm ảnh váy cưới</strong> cho <strong>81 tác phẩm</strong> trong tổng số các ấn phẩm được xuất bản của họ trong 30 năm qua.</p>
                        <div><strong>━ Thân thiện nhắc nhở ━</strong><br /> Trượt sang trái/phải ở đống ảnh để xem thêm ảnh tiếp theo!</div>
                    </div>
                </div>
                <img id="alisa" alt="Alisa" src={alisa} />
                <img id="liar" alt="" src={liar} />
            </div>
        </div>
    );
}

export default Reward;