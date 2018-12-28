import React from 'react';
import PropTypes from 'prop-types';

// TODO: MouseOver, MouseLeave to color the buttons randomly.
function getPastelColor() {
  let h, s, l;

  h = Math.random() * 360;
  s = Math.random() * 70 + 55;
  l = Math.random() * 10 + 65;

  const hslString = `hsl(${h}, ${s}%, ${l}%)`;
  return hslString;
}

function handleButtonHover(event) {
  const pastelColor = getPastelColor();
  const btnStyle = event.target.style;
  btnStyle.border = `2px solid ${pastelColor}`;
  btnStyle.boxShadow = `0 0 2px 1px ${pastelColor}`;
  btnStyle.color = `${pastelColor}`;
  btnStyle.transition = `.4s all ease`;
}

function handleButtonLeave(event) {
  const btnStyle = event.target.style;
  btnStyle.border = '2px solid #d3d3d3';
  btnStyle.boxShadow = `initial`;
  btnStyle.color = `white`;
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
