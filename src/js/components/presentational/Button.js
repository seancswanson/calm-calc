import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, value, key, handleButtonClick}) => {
  return(
    <button className={key +'Button Button'} value={value} onClick={handleButtonClick}>
      {label}
    </button>
)
};

export default Button;
