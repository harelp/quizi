import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../../Loader';
import { EditQuizContext } from '../EditQuizContext';
import QuizName from './QuizName';
import EditBox from '../EditBox';
import Card from './Card';
import EditQuizDetails from './EditQuizDetails';
import AddQuestion from './addQuestion/AddQuestion';

const EditingLayout = props => {
  const { currQuiz, setCurrQuiz } = useContext(EditQuizContext);
  const [open, setOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    async function fetchQuizz() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/quizzes/${props.quizId}`
        );
        if (isSubscribed) setCurrQuiz(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuizz();
    return () => (isSubscribed = false);
  }, []);

  const deleteQuiz = async () => {
    setIsloading(true);
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/quizzes/${props.quizId}`
      );
      toast.success('Deleted Successfully', {
        onClose: () => {
          props.RedirectQuiz();
        }
      });
    } catch (err) {
      toast.error('Try again');
      setIsloading(false);
    }
  };

  const boxDivs = (
    <div className="col s12 padNone">
      <span
        onClick={() => {
          setOpenQuestion(false);
          setOpen(true);
        }}
      >
        <EditBox text="Edit Details" icon={'edit'} />
      </span>
      <span
        onClick={() => {
          setOpen(false);
          setOpenQuestion(true);
        }}
      >
        <EditBox text="Add Question" icon={'add_circle'} />
      </span>
      <span onClick={deleteQuiz} disabled>
        <EditBox text="Delete Quiz" icon={'delete'} />
      </span>
    </div>
  );

  return (
    <div className="container">
      <QuizName />
      <div className="row">
        {isLoading ? (
          <div className="col s12 padNone center-align">
            <Loader />
          </div>
        ) : (
          boxDivs
        )}
      </div>

      <div
        className="row"
        style={{
          display: open ? 'block' : 'none'
        }}
      >
        <div className="col s12">
          <EditQuizDetails setOpen={setOpen} />
        </div>
      </div>

      <div
        className="row"
        style={{
          display: openQuestion ? 'block' : 'none'
        }}
      >
        <div className="col s12">
          <AddQuestion setOpen={setOpenQuestion} quizId={props.quizId} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <h5>Questions</h5>
        </div>
      </div>

      <div className="row">
        {currQuiz !== '' &&
          currQuiz.content.map(el => {
            return (
              <Card
                key={el.question}
                quizId={props.quizId}
                element={el}
                currQuiz={currQuiz}
              />
            );
          })}
      </div>
    </div>
  );
};

export default EditingLayout;
