import React, { useContext } from 'react';
import { CqContext } from '../CqContext';
const ViewBox = props => {
  const { data } = useContext(CqContext);
  return <p>{data}</p>;
};

export default ViewBox;
