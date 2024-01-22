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
            border: { borderBottom: "7px solid #f9ac02" }
        },
        {
            cover: kono2023,
            year: "2023",
            url: "https://url.meoki.vn/konorano2023",
            border: { borderBottom: "7px solid #e62229" }
        },
        {
            cover: kono2022,
            year: "2022",
            url: "https://url.meoki.vn/konorano2022",
            border: { borderBottom: "7px solid #fc4d06" }
        },
        {
            cover: kono2021,
            year: "2021",
            url: "https://url.meoki.vn/konorano2021",
            border: { borderBottom: "7px solid #01a5e9" }
        }
    ]

    return (
        <div className="wrapper konorano">
            <SectionTitle
                title="Tài Liệu"
                description="Chia sẻ tài liệu ôn bài. Kono Light Novel ga Sugoi cho 4 năm gần nhất! (EPUB)"
                titleType="type2"
            />
            <div className="gridKono">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="gridItem" style={item.border} onClick={() => window.open(item.url, "_blank")}>
                            <img alt="" src={item.cover} />
                            <div className="info">
                                <h2>Kono Light Novel ga Sugoi! {item.year}</h2>
                                <p>
                                    Nhấn vào khung này để dẫn link tải xuống cho bản gốc tiếng Nhật <strong>KonoRano {item.year}</strong> với định dạng sách điện tử EPUB!
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default KonoRano;