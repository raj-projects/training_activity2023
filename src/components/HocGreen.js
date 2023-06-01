import React from 'react'

const HocGreen = (props) => {
  return (
    <div
      className="counter-section"
      style={{ backgroundColor: 'green', color: 'white' }}
    >
      <h2>Green Counter</h2>
      <h3>
        <props.comp />
      </h3>
    </div>
  );
}

export default HocGreen;