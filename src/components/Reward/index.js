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

                {/* <div className='item goldBonus'>
                    <p>Ngoài ra, người giành Giải Nhất bên cạnh artbook còn sẽ được chúng tôi thưởng nóng thêm số tiền <span> 1.000.000đ (1 triệu đồng) </span> chuyển khoản trực tiếp!</p>
                </div> */}

                <div className='silverBronze'>
                    <div className="item silver">
                        <div className='silverContent'>
                            <h1>━ Giải Nhì ━</h1>
                            <h3>700.000đ</h3>
                            <p>Sau khi cân nhắc thì chúng tôi quyết định sẽ chỉ có Giải Nhất được đồ thật vật thật.
                                Hai giải còn lại sẽ là tiền mặt, Giải Nhì sẽ là <strong>700.000đ</strong> và chúng tôi đưa ra hai phương án nhận thưởng cho quý độc giả như sau.
                                <br /><br /><strong>1.</strong> Nhận tiền bằng chuyển khoản trực tiếp.
                                <br /><strong>2.</strong> Đặt hàng mua sách trực tiếp trên các nền tảng Fahasa/Shopee/Lazada/Tiki với tổng giá trị đơn hàng không vượt qua số tiền của giải thưởng.

                            </p>
                        </div>
                    </div>
                    <div className="item bronze">
                        <div className='bronzeContent'>
                            <h1>━ Giải Ba ━</h1>
                            <h3>500.000đ</h3>
                            <p>
                                Tương tự Giải Nhì thì Giải Ba cũng sẽ là tiền mặt với số tiền là <strong>500.000đ</strong> và cũng với 2 lựa chọn nhận thưởng như vậy.
                                Tất nhiên nếu chọn phương án mua hàng thì chúng tôi khuyến khích là đơn hàng liên quan tới tiểu thuyết hoặc truyện tranh.
                                <br />Một mục đích khác của cuộc thi này với những câu hỏi trắc nghiệm và phần thưởng giá trị như vậy chính là để cổ vũ hỗ trợ phát triển văn hóa đọc nói chung đặc biệt là light novel nói riêng.
                            </p>
                        </div>
                    </div>
                </div>
                <img id="alisa" alt="Alisa" src={alisa} />
                <img id="liar" alt="" src={liar} />
            </div >
        </div >
    );
}

export default Reward;