import "./Committee.scss"
import SectionTitle from "../SectionTitle"
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"

function Committee() {
    return (
        <div className="committee wrapper">
            <SectionTitle
                title="Nhân Sự"
                description="Ban tổ chức. Mọi câu hỏi thắc mắc về cuộc thi đều có thể gửi tin nhắn trực tiếp tới hai trang này!"
                titleType="type2"
            />
            <div className="avatar">
                <div>
                    <img
                        onClick={() => window.open('https://facebook.com/NaviRanobe', '_blank')}
                        alt="NaviRanebe"
                        src={avatar1}
                    />
                    <p>@NaviRanobe</p>
                    <p className="fullName">Đứa biết nhiều nhất về Light Novel ở Việt Nam</p>
                </div>
                <div>
                    <img
                        onClick={() => window.open('https://facebook.com/TheMeoki', '_blank')}
                        alt="TheMeoki"
                        src={avatar2}
                    />
                    <p>@TheMeoki</p>
                    <p className="fullName">Đứa biết nhiều thứ hai về Light Novel chuyên đi reply comment xin name</p>
                </div>
            </div>
        </div>
    );
}

export default Committee;