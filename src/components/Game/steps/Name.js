import React from 'react';
import './Name.css';

export default function Name(props) {
  return (
    <form onSubmit={props.onSubmit} className="col xl12 s12 center">
      <div className="row cust">
        <input
          className="txtbox"
          name="nickName"
          value={props.value}
          onChange={props.onChange}
          type="text"
          maxLength="20"
          placeholder="NickName"
        />
      </div>
      <div className="row">
        <button className="waves-effect indigo btn-200 btn-large">
          That's Me
        </button>
      </div>
    </form>
  );
}
