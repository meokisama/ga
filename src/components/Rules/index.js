import "./Rules.scss"
import { allRules } from "./Rules.js"
import SectionTitle from "../SectionTitle"
import virgin from "../../assets/virgin.webp"

function Rules() {
    return (
        <div className=" rules wrapper">
            <SectionTitle
                title="Thể Lệ"
                description="Quy tắc cơ bản cho cuộc thi. Còn có tuân thủ hay không thì chúng tôi cơ bản không để ý!"
                titleType="type3"
            />
            <div className="item">
                {allRules.map((rule, index) => {
                    return (
                        <div key={index} className="rule">
                            <strong>{index + 1}.</strong> {rule}
                        </div>
                    )
                })}
            </div>
            <img alt="Virgin Road" src={virgin} />
        </div>
    );
}

export default Rules;