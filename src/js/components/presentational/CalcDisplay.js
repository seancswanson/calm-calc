import React from 'react';
import PropTypes from 'prop-types';

const Display = ({data}) => {
  let string = data.join('');
  return(
  <div className="DisplayContainer">
  {string}
  </div>
)
};

export default Display;
