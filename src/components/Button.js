// import React from 'react'

const Button = ({ color, text, toggle }) => {
  //   const handleClick = () => {
  //     console.log("Click");
  //   };
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggle}
        // onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
