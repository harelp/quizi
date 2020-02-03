import React, { useEffect, useContext } from 'react'
import { QuizContext } from '../../Context/QuizContext';
import './Question.css';

export default function Question(props) {
    const { content } = useContext(QuizContext);
    useEffect(() => {
        const interVal = setInterval(props.onUpdate, 4000);
        return () => {
            clearInterval(interVal)
        };
    }, [props.onUpdate])
    return (
        <div className="question-flex">
            <h3>{content[props.qNum].question}</h3>
            <div>timer</div>
        </div>
    )
}


