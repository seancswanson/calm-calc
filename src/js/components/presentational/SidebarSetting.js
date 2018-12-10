import React from 'react';
import PropTypes from 'prop-types';

const SideBarSetting = ({label, handleVolumeChange, handleFrequencyChange}) => {
  return(
  <div className="SideBarSetting">
    <h3>{label}</h3>
    <input type="checkbox" name={label}/><label htmlFor={label}>on/off</label>
    <p className="SideBarSetting--label">Frequency</p>
    <input type="range" min="0" max="1" step="0.1" onChange={handleFrequencyChange}/>
    <input type="checkbox" name={label + "volume"}/><label htmlFor={label + "volume"}>on/off</label>
    <p className="SideBarSetting--label">Volume</p>
    <input type="range" min="0" max="1" step="0.1" onChange={handleVolumeChange}/>
  </div>
)
};

export default SideBarSetting;
