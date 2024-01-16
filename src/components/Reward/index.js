import "./Reward.scss"
import SectionTitle from "../SectionTitle"
import alisa from "../../assets/alisa.webp"

function Reward() {
    return (
        <div className="wrapper">
            <div className="reward">
                <SectionTitle
                    title="Giải Thưởng"
                    description="Phần thưởng giành cho 3 người chiến thắng năm nay!"
                    titleType="type1"
                />
                <div className="item x1">hv</div>
                <div className="item">rg</div>
                <div className="item">dv</div>
                <img id="alisa" alt="Alisa" src={alisa} />
            </div>
        </div>
    );
}

export default Reward;