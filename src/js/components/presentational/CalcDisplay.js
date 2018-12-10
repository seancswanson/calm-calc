import React from 'react';
import PropTypes from 'prop-types';

const Display = ({data}) => {
  let input = data.map(datum => {
    return(<span className="input-char">{datum}</span>)
  })
  return(
  <div className="DisplayContainer">
    {input}
  </div>
)
};

export default Display;
