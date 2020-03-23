import React, { useState, useContext, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';
import { toast } from 'react-toastify';

import { EditQuizContext } from '../../EditQuizContext';

import EditQuestion from '../EditQuestion';
import EditButtons from '../EditButtons';
import AddAnswer from './AddAnswer';

const API_URL = 'http://localhost:5000/api/v1';

const AddQuestion = props => {
  const { setCurrQuiz } = useContext(EditQuizContext);
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [correctAns, setCorrectAns] = useState();
  const [ansObj, setAnsObj] = useState({
    ans0: '',
    ans1: '',
    ans2: '',
    ans3: ''
  });

  useEffect(() => {
    console.log('i ran');
    return () => {
      console.log('rang agin');
    };
  }, []);

  const questionTag = true;

  const handleSubmit = async evt => {
    setIsLoading(true);
    evt.preventDefault();
    let radio,
      ansArray = [];
    Object.keys(ansObj).forEach(function(key) {
      if (correctAns === key) radio = ansObj[key];
      ansArray.push(ansObj[key]);
    });

    const content = {
      cId: uuid(),
      question,
      answers: ansArray,
      correctAns: radio
    };

    try {
      const response = await axios.post(
        `${API_URL}/quizzes/${props.quizId}`,
        content
      );

      toast.success('Question Added', {
        onClose: () => {
          setCurrQuiz(response.data);
          setQuestion('');
          setCorrectAns('');
          setAnsObj({
            ans0: '',
            ans1: '',
            ans2: '',
            ans3: ''
          });
          setIsLoading(false);
          props.setOpen(false);
        }
      });
    } catch (err) {
      toast.error('Try again');
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <EditQuestion
              question={question}
              setQuestionEdit={setQuestion}
              questionTag={questionTag}
            />
          </div>
          <div className="row">
            <AddAnswer
              id={'ans0'}
              setCorrectAns={setCorrectAns}
              correctAns={correctAns}
              ansObj={ansObj}
              answer={ansObj.ans0}
              setAnsObj={setAnsObj}
            />
            <AddAnswer
              id={'ans1'}
              setCorrectAns={setCorrectAns}
              correctAns={correctAns}
              ansObj={ansObj}
              answer={ansObj.ans1}
              setAnsObj={setAnsObj}
            />
            <AddAnswer
              id={'ans2'}
              setCorrectAns={setCorrectAns}
              correctAns={correctAns}
              ansObj={ansObj}
              answer={ansObj.ans2}
              setAnsObj={setAnsObj}
            />
            <AddAnswer
              id={'ans3'}
              setCorrectAns={setCorrectAns}
              correctAns={correctAns}
              ansObj={ansObj}
              answer={ansObj.ans3}
              setAnsObj={setAnsObj}
            />
          </div>

          <EditButtons setOpen={props.setOpen} isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;
