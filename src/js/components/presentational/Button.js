import React from 'react';
import PropTypes from 'prop-types';

// TODO: MouseOver, MouseLeave to color the buttons randomly.
function getPastelColor() {
  let h, s, l;

  h = Math.random() * 360;
  s = Math.random() * 70 + 25;
  l = Math.random() * 10 + 85;

  const hslString = `hsl(${h}, ${s}%, ${l}%)`;
  return hslString;
}

function handleButtonHover(event) {
  const btnStyle = event.target.style;
  btnStyle.border = `1px solid ${getPastelColor()}`;
  btnStyle.boxShadow = `0 0 20px 3px ${getPastelColor()}`;
}

function handleButtonLeave(event) {
  const btnStyle = event.target.style;
  btnStyle.border = '1px solid #d3d3d3';
  btnStyle.boxShadow = `initial`;
}

const Button = ({ label, value, dataId, handleButtonClick }) => {
  return (
    <button
      className={dataId + 'Button Button'}
      value={value}
      onClick={handleButtonClick}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonLeave}
    >
      {label}
    </button>
  );
};

export default Button;
