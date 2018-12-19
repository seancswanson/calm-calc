import React from 'react';
import PropTypes from 'prop-types';

const Display = ({displayValue}) => {
  // let input = data.map((datum, i) => {
  //   return(<span className="input-char" key={i}>{datum}</span>)
  // })
  return(
  <div className="DisplayContainer">
    {displayValue}
  </div>
)
};

export default Display;
