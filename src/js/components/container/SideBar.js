import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBarSetting from '../presentational/SideBarSetting';

class SideBar extends Component {
  //----------
  constructor() {
    super();

    this.state = {

    };
  };

  //----------
  render() {
    const { shown, handlers, sideBarRef } = this.props;
    const { handleRainVolumeChange, handleButtonVolumeChange, handleRainFrequencyChange, handleButtonFrequencyChange } = handlers;
    return (
      <div className={shown ? 'SideBar' : 'hidden'} ref={sideBarRef}>
        <div className="SideBar-settings">
          <SideBarSetting label="Rain" handleVolumeChange={handleRainVolumeChange} handleFrequencyChange={handleRainFrequencyChange} />
          <SideBarSetting label="ButtonFX" handleVolumeChange={handleButtonVolumeChange} handleFrequencyChange={handleButtonFrequencyChange} />
        </div>
      </div>
    )
  }
}

export default SideBar;
