import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import QuizBox from './QuizBox';
import QuizAdd from './QuizAdd';
import { QuizContext } from './../../Context/QuizContext';
import { UserContext } from './../../Context/UserContext';
const QuizLayout = props => {
  const { userQuiz, setUserQuiz } = useContext(QuizContext);
  const { user } = useContext(UserContext);

  const directToCreate = () => {
    props.history.push('/profile/create');
  };

  const directToEdit = id => {
    //props.history.push('/profile/editquiz');
    props.history.push({
      pathname: '/profile/editquiz',
      state: { id }
    });
  };
  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/quizzes/quiz/${user._id}`
        );
        setUserQuiz(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuizzes();
  }, []);

  const checkData = userQuiz !== null;
  const quizList =
    checkData &&
    userQuiz.map((el, val) => {
      return (
        <QuizBox
          key={val}
          counter={val + 1}
          data={el}
          editQuiz={directToEdit}
        />
      );
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h5>My Quizzes</h5>
        </div>
      </div>
      <div className="row">
        <div className="col l12 12">
          <QuizAdd directToCreate={directToCreate} />
          {quizList}
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;
