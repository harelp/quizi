import React, { useContext } from 'react';
import { CqContext } from '../CqContext';
import { UserContext } from '../../Context/UserContext';
const QuizDetails = props => {
  // const [quizName, quizName] = useState();
  const { handleDetails } = useContext(CqContext);
  const { user } = useContext(UserContext);
  const nextStep = () => {
    if (props.quizName === undefined || props.txtVal === undefined) {
      return alert('Please Input Name or Description');
    }
    props.onStep(1);
    handleDetails({
      name: props.quizName,
      description: props.txtVal,
      userId: user._id
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="input-field col s12">
          <small>Quiz Name</small>
          <input
            onChange={evt => props.onQuizName(evt.target.value)}
            id="name"
            type="text"
            className="col 12 validate"
            required
            value={props.quizName}
          />
        </div>
        <div className="input-field col s12">
          <small>Quiz Description</small>
          <textarea
            id="textarea1"
            className="materialize-textarea"
            onChange={evt => props.onTextVal(evt.target.value)}
            value={props.txtVal}
            required
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 right-align">
          <button
            className="btn waves-effect waves-light indigo"
            onClick={nextStep}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
