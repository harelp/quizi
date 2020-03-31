import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import CardTitle from './CardTitle';
import EditQuestion from './EditQuestion';
import EditAnswer from './EditAnswer';
import EditButtons from './EditButtons';
import './editing.css';

import { EditQuizContext } from '../EditQuizContext';

const API_URL = 'http://localhost:5000/api/v1';

const Card = props => {
  const { setCurrQuiz } = useContext(EditQuizContext);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setstate] = useState(true);
  const [questionEdit, setQuestionEdit] = useState('$@');
  const [answersObj, setAnswersObj] = useState('$@');
  const [correctAns, setCorrectAns] = useState('$@');

  useEffect(() => {
    questionEdit === '$@' && setQuestionEdit(props.element.question);
    correctAns === '$@' && setCorrectAns(props.element.correctAns);
    if (answersObj === '$@') {
      const newObject = Object.assign({}, props.element.answers);
      setAnswersObj(newObject);
    }
  }, [questionEdit, correctAns, answersObj]);

  const handleSubmit = async evt => {
    evt.preventDefault();
    setIsLoading(true);
    const answers = [];
    for (let obj in answersObj) {
      answers.push(answersObj[obj]);
    }
    const DATATOPOST = {
      question: questionEdit,
      answers: answers,
      correctAns
    };
    try {
      const response = await axios.patch(
        `${API_URL}/quizzes/${props.quizId}/${props.element.cId}`,
        DATATOPOST
      );
      toast.success('Question Saved', {
        onClose: () => {
          setOpen(false);
          setIsLoading(false);
        }
      });
      setCurrQuiz(response.data);
    } catch (error) {
      toast.error('Try Again');
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const checkLength = props.currQuiz.content.length === 1;
    if (!checkLength) {
      try {
        const response = await axios.post(
          `${API_URL}/quizzes/${props.quizId}/${props.element.cId}`
        );
        toast.success('Question Deleted', {
          onClose: () => {
            setCurrQuiz(response.data);
            setIsLoading(false);
          }
        });
      } catch (error) {
        toast.error('Try Again');
        setIsLoading(false);
      }
    } else {
      console.log('Do you want to delete the quiz?');
      setIsLoading(false);
    }
  };

  return (
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <CardTitle
            question={props.element.question}
            setOpen={setOpen}
            handleDelete={handleDelete}
            isLoading={isLoading}
          />
          <form
            onSubmit={handleSubmit}
            style={{
              display: open ? 'block' : 'none'
            }}
          >
            <div className="row">
              <EditQuestion
                question={questionEdit}
                setQuestionEdit={setQuestionEdit}
              />

              {answersObj !== '$@' &&
                Object.keys(answersObj).map(el => {
                  return (
                    <EditAnswer
                      key={el}
                      val={el}
                      answer={answersObj[el]}
                      correctAns={correctAns}
                      setCorrectAns={setCorrectAns}
                      answersObj={answersObj}
                      setAnswersObj={setAnswersObj}
                      state={state}
                      setstate={setstate}
                    />
                  );
                })}
            </div>
            <EditButtons setOpen={setOpen} isLoading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
