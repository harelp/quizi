import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CqContext } from '../CqContext';

const ConfirmQuiz = props => {
  const { postData } = useContext(CqContext);
  const handleCreate = () => {
    postData();

    // console.log(props.history);
    //hashHistory.push('/');
  };
  return (
    <div className="row">
      <h4 className="center">Confirm</h4>
      <div className="col s6 center">
        {/* <Link
          to={{
            pathname: `/profile`
          }}
          onClick={() => postData()}
          className="waves-effect btn red darken-2"
        >
          Create Quiz
        </Link> */}
        <button
          className="btn waves-effect waves-light red darken-2"
          onClick={handleCreate}
        >
          Create Quiz
        </button>
      </div>
      <div className="col s6 center">
        <button
          className="btn waves-effect waves-light indigo"
          onClick={() => {
            props.onStep(1);
          }}
        >
          Add Question ?
        </button>
      </div>
    </div>
  );
};

export default ConfirmQuiz;
