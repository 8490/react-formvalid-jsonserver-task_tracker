// import React from 'react'

const Button = ({ color, text, toggleShow }) => {
  //   const handleClick = () => {
  //     console.log("Click");
  //   };
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggleShow}
        // onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
