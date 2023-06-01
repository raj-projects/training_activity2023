import React from 'react';

const HocBlue = (props) => {
  return (
    <div className='counter-section' style={{backgroundColor: 'blue', color: 'white'}}>
      <h2>Blue Counter</h2>
      <h3><props.comp /></h3>
    </div>
  );
};

export default HocBlue;
