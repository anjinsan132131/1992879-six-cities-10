import React from 'react';
import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="loader-block">
      <span className="loader"></span>
      <p className='loader-message'>Loading ...</p>
    </div>
  );
}

export default LoadingScreen;
