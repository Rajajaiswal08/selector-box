import React, { useState } from 'react';

function Person(props) {
  console.log("props", props);
  const [add, setAdd] = useState(false);

  const toggleText = () => {
    setAdd(!add);
  };

  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  };

  const itemStyle = {
    backgroundColor: '#6200ea',
    color: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '1.2em',
    transition: 'background-color 0.3s',
  };

  const itemHoverStyle = {
    backgroundColor: '#3700b3',
  };

  const textStyle = {
    display: add ? 'block' : 'none',
    marginTop: '10px',
    color: '#333333',
    fontSize: '1em',
  };

  return (
    <div style={containerStyle}>
      <div
        style={add ? { ...itemStyle, ...itemHoverStyle } : itemStyle}
        onClick={toggleText}
      >
        Click me
      </div>
      <div style={textStyle}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quasi quae? Corrupti modi dolor saepe voluptates praesentium ducimus officiis temporibus esse, quisquam rerum. Ipsam ea nam quidem perspiciatis vero iusto!</p>
      </div>
    </div>
  );
}

export default Person;
