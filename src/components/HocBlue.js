import React from 'react';

const HocBlue = (props) => {
  return (
    <div className='counter-section' style={{backgroundColor: 'blue', color: 'white'}}>
      <h1>Blue Counter</h1>
      <h1><props.comp /></h1>
    </div>
  );
};

export default HocBlue;
