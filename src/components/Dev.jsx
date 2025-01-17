import React from 'react';
import Back from './Back';
import Loading from './Loading';
const Dev = props => {
  document.body.style.overflow = 'auto';
  return (
    <>
      <Loading title='devs' />
      <div className='c-container'>
        <Back history={props} />
        <h1>/devs</h1>
      </div>
    </>
  );
};

export default Dev;
