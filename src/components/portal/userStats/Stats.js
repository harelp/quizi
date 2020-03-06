import React from 'react';

const Stats = props => {
  return (
    <div className="col s12 m6 l4 center">
      <div className={'card darken-1 ' + props.color}>
        <div className="card-content white-text">
          <span>{props.title}</span>
          <h5>{props.num}</h5>
        </div>
      </div>
    </div>
  );
};

export default Stats;
