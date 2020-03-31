import React, { useState, useEffect, useContext } from 'react';
import QuizBox from './QuizBox';
import axios from 'axios';
import './hero.css';
import { QuizContext } from '../Context/QuizContext';

export default function QuizList(props) {
  const [quizzes, setQuizzes] = useState(null);
  const { getQuiz } = useContext(QuizContext);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/quizzes`
        );
        setQuizzes(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuizzes();
    console.log('i got in ');
  }, []);

  const randomQuiz = () => {
    let randomItem = quizzes[Math.floor(Math.random() * quizzes.length)];
    getQuiz(randomItem._id);
    props.history.push('/play');
  };

  const quizList =
    quizzes &&
    quizzes.map(el => {
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
      );
    });
  const preLoader = (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  );
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row white-text">
            <div className="col l7 s12">
              <h2>
                <strong>Become your most unstoppable self</strong>
              </h2>
            </div>
            <div className="col l12 s12">
              <h5>Fun way to empower your mind</h5>
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <button
                className="btn waves-effect black-text yellow  darken-2 btn-large"
                onClick={randomQuiz}
              >
                Join Random Quizi
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">{quizzes === null ? preLoader : quizList}</div>
      </div>
    </div>
  );
}
