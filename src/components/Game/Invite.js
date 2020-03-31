import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../Context/QuizContext';
import axios from 'axios';

const Invite = props => {
  const { setContent, setQuiz } = useContext(QuizContext);
  const [urlId, setUrlId] = useState(false);
  const [quiziId, setQuiziId] = useState('');
  const [idCheck, setIdCheck] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id && !urlId) setUrlId(id);
    id && setIdCheck(true);
  }, [urlId]);

  const hasId = (
    <input
      id="quiziPin"
      type="text"
      className="validate center"
      disabled
      required
      value={urlId}
    />
  );

  const noId = (
    <input
      id="quiziPin"
      type="text"
      className="validate center"
      required
      value={quiziId}
      onChange={evt => setQuiziId(evt.target.value)}
    />
  );

  const handleSubmit = async evt => {
    evt.preventDefault();
    let finalID;
    if (idCheck) finalID = urlId;
    else finalID = quiziId;

    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/quizzes/${finalID}`
      );
      setQuiz(response.data);
      setContent(response.data.content);
      props.history.push('/play');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container center">
      <div className="row" style={{ marginTop: '25px' }}>
        <form
          className="col s12"
          onSubmit={handleSubmit}
          style={{
            width: '300px',
            marginTop: '100px'
          }}
        >
          <div className="row">
            <div className="input-field col s12">
              <h6>Quizi Pin</h6>

              {idCheck ? hasId : noId}
            </div>
          </div>
          <div className="input-field">
            <button className="btn waves-effect indigo btn-large" type="submit">
              Start Quizi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invite;
