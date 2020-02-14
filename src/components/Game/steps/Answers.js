import React, { useEffect, useContext, useState } from 'react';
import AnswerBox from './AnswerBox';
import { QuizContext } from '../../Context/QuizContext';
import './Answers.css';

export default function Answers(props) {
    const { content } = useContext(QuizContext);
    const [answer, setAnswer] = useState(null);
    useEffect(() => {
        const interVal = setInterval(props.onReset, 4000);
        return () => {
            clearInterval(interVal)
        };
    }, [props.onReset])


    const handleAnswer = (ans) => {
        const userAnswer = ans === content[props.qNum].correctAns;
        console.log("clicked")
        setAnswer(userAnswer);
    }



    const answers = content[props.qNum].answers;
    const question = content[props.qNum].question;
    const ansCorrect = answer && "Correct";
    const ansInCorrect = answer === null ? "" : "Incorrect";

    return (
        <div className="answer-container">
            <div className="answer-flex">
                <div className="flex-top">
                    <h5>Timer</h5>
                    <h5>{(answer) ? ansCorrect : ansInCorrect}</h5>
                </div>
                <div className="flex-middle">
                    <h3>{question}</h3>
                </div>
                <div className="flex-bottom">
                    {answers.map((el) => {
                        return (
                            <AnswerBox key={el} answer={el} divController={answer} onAnswer={() => handleAnswer(el)} />
                        )
                    })}
                </div>
            </div>
        </div>
    )

}