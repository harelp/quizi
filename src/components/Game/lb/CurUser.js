import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
const CurUser = () => {
  const { points } = useContext(UserContext);
  const checkPoints = points !== null;
  return (
    <div className="row">
      <div className="col s12 center">
        <h5>{checkPoints ? points : 0}</h5>
      </div>
    </div>
  );
};

export default CurUser;
