import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CalcContainer from './components/container/CalcContainer';
import TopNav from './components/presentational/TopNav';
import SideBar from './components/container/SideBar';
import Footer from './components/presentational/Footer';
require('../style/App.less');

class App extends Component {
  //----------
  constructor() {
    super();

    this.state = {
      rain: true,
      rainFreq: 1,
      rainVolume: 1,
      buttonFx: true,
      buttonVolume: 1,
      showSideBar: false
    };

    this.sideBarRef = React.createRef();

    this.handleGearClick = this.handleGearClick.bind(this);
    this.handleRainVolumeChange = this.handleRainVolumeChange.bind(this);
    this.handleButtonVolumeChange = this.handleButtonVolumeChange.bind(this);
    this.handleRainFrequencyChange = this.handleRainFrequencyChange.bind(this);
    this.handleButtonFrequencyChange = this.handleButtonFrequencyChange.bind(
      this
    );
  }

  //----------
  handleGearClick() {
    console.log('SideBar toggle');
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  }

  //----------
  handleRainVolumeChange(event) {
    console.log('Rain Volume Change');
    this.setState({ rainVolume: event.target.value });
  }

  //----------
  handleButtonVolumeChange(event) {
    console.log('Button Volume Change');
    this.setState({ buttonVolume: event.target.value });
  }

  //----------
  handleRainFrequencyChange(event) {
    console.log('Rain Frequency Change');
    this.setState({ rainFrequency: event.target.value });
  }

  //----------
  handleButtonFrequencyChange(event) {
    console.log('Button Frequency Change');
    this.setState({ buttonFrequency: event.target.value });
  }

  //----------
  render() {
    const { showSideBar } = this.state;

    const sidebarHandlers = {
      handleRainVolumeChange: this.handleRainVolumeChange,
      handleButtonVolumeChange: this.handleButtonVolumeChange,
      handleRainFrequencyChange: this.handleRainFrequencyChange,
      handleButtonFrequencyChange: this.handleButtonFrequencyChange
    };

    return (
      <div className="App">
        <div className="App-grid">
          <TopNav />
          <CalcContainer />
          <Footer />
        </div>
        <div className="gear" onClick={this.handleGearClick} />
        {showSideBar ? (
          <SideBar
            shown={showSideBar}
            handlers={sidebarHandlers}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;

const wrapper = document.querySelector('#React');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
