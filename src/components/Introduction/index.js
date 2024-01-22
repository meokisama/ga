import "./Introduction.scss"
import lovecacao from "../../assets/tenor.gif"
import signature from "../../assets/signature.png"

function Introduction() {
    return (
        <div className="introduction">
            <div className="inner">
                <div className="innerContent">
                    <div className="introImage">
                        <img alt="" src={lovecacao} />
                    </div>
                    <div className="introContent">
                        <h1>✤ Khởi Nguyên ✤</h1>
                        <p>
                            Kính chào quý độc giả! Đây là cuộc thi trắc nghiệm light novel có thưởng được tổ chức với mục đích ban đầu là kỉ niệm ngày mở trang (đều là ngày 07/03) của hai trang được đề cập ở mục bên dưới.
                        </p>
                        <p>
                            Cuộc thi sẽ được thiết kế để kiểm tra khả năng hiểu và ghi nhớ các yếu tố văn học của light novel, đồng thời cũng giúp nâng cao kỹ năng tìm kiếm và tra cứu thông tin.
                            Trong cuộc thi, quý độc giả sẽ được thử sức với những câu hỏi về các tác phẩm nổi tiếng, tác giả, nhà xuất bản, giải thưởng và nhiều thông tin thú vị khác trong lĩnh vực light novel.
                        </p>
                        <p>
                            Những phần thưởng hấp dẫn chỉ dành cho những người chiến thắng. Cũng là người có điểm số cao nhất trả lời trong thời gian ngắn nhất!
                        </p>
                        <p>
                            Hãy cùng tham gia và trổ tài kiến thức của mình về light novel để giành những phần thưởng và trở thành độc giả tài ba nhất!
                        </p>
                        <img alt="" src={signature} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction