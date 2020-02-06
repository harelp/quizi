import React from 'react';

const CreateBox = props => {
  return (
    <div className="container">
      <div className="row">
        <p>
          <label>
            <input
              onChange={props.setAns}
              name="groupOne"
              type="radio"
              id={props.name}
              required
            />
            <span>Correct Asnswer?</span>
          </label>
        </p>
        <input
          onChange={props.changeHandler}
          name={props.name}
          type="text"
          className="validate"
          required
        />
      </div>
    </div>
  );
};

export default CreateBox;
