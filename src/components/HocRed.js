import React from 'react'

const HocRed = (props) => {
  return (
    <div
      className="counter-section"
      style={{ backgroundColor: 'red', color: 'white' }}
    >
      <h2>Red Counter</h2>
      <h3>
        <props.comp />
      </h3>
    </div>
  );
}

export default HocRed