import React, { useState, useEffect } from 'react';
import QuizBox from './QuizBox';
import axios from 'axios';

export default function QuizList() {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        async function fetchQuizzes() {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/quizzes`);
                const data = response.data;
                setQuizzes(data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchQuizzes();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col l6 m12 s12">
                    <h5>Quizzes</h5>
                </div>
            </div>

            <div className="row">
                {quizzes.map(el => {
                    return (
                        <div key={el._id} className="col l6 m12 s12">
                            <QuizBox
                                dateCreated={el.dateCreated}
                                content={el.content.length}
                                name={el.name}
                                description={el.description}
                                id={el._id}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}