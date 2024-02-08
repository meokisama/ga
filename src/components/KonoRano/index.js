import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import "./KonoRano.scss"
import SectionTitle from "../SectionTitle"
import kono2021 from "../../assets/konorano/2021.webp"
import kono2022 from "../../assets/konorano/2022.webp"
import kono2023 from "../../assets/konorano/2023.webp"
import kono2024 from "../../assets/konorano/2024.webp"

function KonoRano() {

    const items = [
        {
            cover: kono2024,
            year: "2024",
            url: "https://url.meoki.vn/konorano2024epub",
            vi: "https://docs.google.com/spreadsheets/d/1VbVL3bIBZIMJ9u8fQL73-kGTt2WjxAkBZw6wgw6_oQc/edit?usp=sharing",
            border: { borderBottom: "7px solid #f9ac02" }
        },
        {
            cover: kono2023,
            year: "2023",
            url: "https://url.meoki.vn/konorano2023",
            vi: "https://docs.google.com/spreadsheets/d/1_tL8XRLyMAq3VvPOxhIkl5L7n3HbGR2iow9uJDyMlqs/edit?usp=sharing",
            border: { borderBottom: "7px solid #e62229" }
        },
        {
            cover: kono2022,
            year: "2022",
            url: "https://url.meoki.vn/konorano2022",
            vi: "https://docs.google.com/spreadsheets/d/10b0cGsEBOeHWUVdZl6Hepzekl_3cc48pT4aoolkWUZE/edit?usp=sharing",
            border: { borderBottom: "7px solid #fc4d06" }
        },
        {
            cover: kono2021,
            year: "2021",
            url: "https://url.meoki.vn/konorano2021",
            vi: "https://docs.google.com/spreadsheets/d/1fYgDR2fc_zgmvsmGV1zgGqmxKHIlL7_WoQgCUMbDxv4/edit?usp=sharing",
            border: { borderBottom: "7px solid #01a5e9" }
        }
    ]

    return (
        <div className="wrapper konorano">
            <SectionTitle
                title="Tài Liệu"
                description="Chia sẻ tài liệu ôn bài. Kono Light Novel ga Sugoi cho 4 năm gần nhất! Cả bản gốc tiếng Nhật (EPUB), và bản Việt từ @NaviRanobe (Sheet)."
                titleType="type2"
            />
            <div className="gridKono">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="gridItem" style={item.border}>
                            <img alt="" src={item.cover} />
                            <div className="info">
                                <h2>Kono Light Novel ga Sugoi! {item.year}</h2>
                                <p>Nhấn vào nút tương ứng cho bản Nhật hoặc Việt để truy cập nội dung.</p>
                                <div className='downloadBtn'>
                                    <Button type="primary" icon={<DownloadOutlined />} size="large" onClick={() => window.open(item.url, "_blank")}>
                                        Bản gốc tiếng Nhật (EPUB)
                                    </Button>
                                    <Button type="primary" icon={<DownloadOutlined />} size="large" onClick={() => window.open(item.vi, "_blank")}>
                                        Bản dịch tiếng Việt (Sheet)
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default KonoRano;