import React, { Fragment } from 'react';

const CreateBox = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CreateBox;
