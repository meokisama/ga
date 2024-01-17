import "./Committee.scss"
import SectionTitle from "../SectionTitle"
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"

function Committee() {
    return (
        <div className="committee wrapper">
            <SectionTitle
                title="Nhân Sự"
                description="Ban tổ chức. Mọi câu hỏi thắc mắc về cuộc thi đều có thể gửi tin nhắn trực tiếp tới hai vị này!"
                titleType="type2"
            />
            <div className="avatar">
                <div>
                    <img
                        onClick={() => window.open('https://facebook.com/NaviRanobe', '_blank')}
                        alt="NaviRanebe"
                        src={avatar1}
                    />
                    <p>NaviRanobe</p>
                </div>
                <div>
                    <img
                        onClick={() => window.open('https://facebook.com/TheMeoki', '_blank')}
                        alt="TheMeoki"
                        src={avatar2}
                    />
                    <p>TheMeoki</p>
                </div>
            </div>
        </div>
    );
}

export default Committee;