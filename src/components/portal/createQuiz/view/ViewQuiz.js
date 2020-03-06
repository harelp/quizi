import React, { useContext } from 'react';
import { CqContext } from '../CqContext';
import ViewBox from './ViewBox';
const ViewQuiz = props => {
  const { data } = useContext(CqContext);
  const isTrue = data.length === 0;
  if (isTrue) return '';

  return (
    <div>
      {data.map(el => {
        return (
          <div key={el}>
            <ViewBox
              question={el.question}
              answers={el.answers}
              correctAns={el.correctAns}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ViewQuiz;
