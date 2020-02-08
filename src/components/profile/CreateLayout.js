import React, { useState, useEffect } from 'react';
import CreateQuiz from './create/CreateQuiz';
import ViewBox from './view/ViewBox';
import { CqProvider } from './CqContext';
import './CreateLayout.css';

const CreateLayout = () => {
  return (
    <CqProvider>
      <div className="container " style={{ marginTop: '20px' }}>
        <div className="row CreateLayout">
          <CreateQuiz />
        </div>
        <div className="row">
          <div className="col s12">
            <ViewBox />
          </div>
        </div>
      </div>
    </CqProvider>
  );
};

export default CreateLayout;
