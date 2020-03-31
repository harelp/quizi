import React from 'react';
import Loader from '../../../Loader';
const CardTitle = props => {
  return (
    <div className="row card-title black-text">
      <div className="col s8">{props.question}</div>
      <div className="col s4 right-align">
        {props.isLoading ? (
          <Loader />
        ) : (
          <i
            className="material-icons right iconHover"
            onClick={() => props.handleDelete()}
            disabled={props.isLoading}
          >
            delete
          </i>
        )}
        {props.isLoading ? (
          ''
        ) : (
          <i
            className="material-icons right iconHover"
            onClick={() => props.setOpen(true)}
          >
            edit
          </i>
        )}
      </div>
    </div>
  );
};

export default CardTitle;
