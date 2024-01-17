import { useState } from "react"

import SectionTitle from "../SectionTitle"
import "./Questions.scss"
import haruhi from "../../assets/haruhi.webp"
import { questionContent } from "./QuestionsContent.js"

function Questions() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const quiz = questionContent.map(question => {
        return (
            <div>
                <h2 className="question">{question.question}</h2>
                <div className="answer">
                    <div className={question.correctOption === 'optionA' ? 'optionA' : null}><strong>A.</strong> {question.optionA}</div>
                    <div className={question.correctOption === 'optionB' ? 'optionB' : null}><strong>B.</strong> {question.optionB}</div>
                    <div className={question.correctOption === 'optionC' ? 'optionC' : null}><strong>C.</strong> {question.optionC}</div>
                    <div className={question.correctOption === 'optionD' ? 'optionD' : null}><strong>D.</strong> {question.optionD}</div>
                </div>
            </div>
        )
    })

    const currentQuestion = quiz[currentQuestionIndex];

    const nextClick = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else setCurrentQuestionIndex(0);
    }

    const prevClick = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else setCurrentQuestionIndex(19);
    }

    return (
        <div className="wrapper">
            <div className="questionWrapper">
                <SectionTitle title={"Mẫu Câu Hỏi"} description={"Đây là các câu hỏi của sự kiện năm ngoái, các mẫu câu hỏi đều sẽ tương tự như thế này!"} titleType="type2" />
                <div className="questionContainer">

                    <div className="questionHeader">
                        <button onClick={prevClick}>←</button>
                        <h1>Câu {(currentQuestionIndex + 1) < 10 ? '0' + (currentQuestionIndex + 1) : (currentQuestionIndex + 1)}/20</h1>
                        <button onClick={nextClick}>→</button>
                    </div>

                    {currentQuestion}

                </div>
                <img alt="Haruhi" src={haruhi} />
            </div>
        </div>
    );
}

export default Questions;