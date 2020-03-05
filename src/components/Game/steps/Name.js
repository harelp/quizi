import React, { useContext } from 'react';
import './Name.css';
import { UserContext } from '../../Context/UserContext';

export default function Name(props) {
  const { user } = useContext(UserContext);
  const userLogged = user === undefined;

  const inpOne = (
    <input
      className="txtbox"
      name="nickName"
      value={userLogged ? '' : user.nickName}
      type="text"
      maxLength="20"
      disabled
    />
  );

  const inpTwo = (
    <input
      className="txtbox"
      name="nickName"
      onChange={props.onChange}
      type="text"
      maxLength="20"
      required
    />
  );
  return (
    <div className="container center" style={{ marginTop: '100px' }}>
      <form onSubmit={props.onSubmit} className="col s12">
        <h6>Choose a nickname</h6>
        <div className="row cust">{userLogged ? inpTwo : inpOne}</div>
        <div className="row">
          <button className="waves-effect indigo btn-200 btn-large">
            That's Me
          </button>
        </div>
      </form>
    </div>
  );
}
