import React, { useContext } from 'react';
import './QuizBox.css';
import { Link } from 'react-router-dom';
import { QuizContext } from '../Context/QuizContext';

export default function QuizBox(props) {
  const { getQuiz } = useContext(QuizContext);
  const { name, content, description, id, dateCreated } = props;
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title activator black-text">
          {name}
          <i className="material-icons right">add</i>
        </span>
        <div className="center-align">
          <h5>{content} Questions</h5>
        </div>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          <i className="material-icons right">close</i>
        </span>
        <p style={{ marginTop: '30px' }}>{description}</p>
      </div>
      <div className="fl-sp-between card-action grey-text text-darken-4">
        <span>{dateCreated}</span>
        <Link
          to={{
            pathname: `/play`
          }}
          onClick={() => getQuiz(id)}
          className="waves-effect indigo btn-small"
        >
          Play
        </Link>
        {/* {this.props.children} */}
      </div>
    </div>
  );
}
