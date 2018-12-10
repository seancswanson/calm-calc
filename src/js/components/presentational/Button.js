import React from 'react';
import PropTypes from 'prop-types';

// TODO: MouseOver, MouseLeave to color the buttons randomly.

const Button = ({label, value, dataId, handleButtonClick}) => {
  return(
    <button className={dataId +'Button Button'} value={value} onClick={handleButtonClick}>
      {label}
    </button>
)
};

export default Button;
