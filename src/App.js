/*global navigator*/
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      screen: 1,
      locations: [],
      userGpsPosition: {},
    };
  }

  useGPS(){
    var myPosition = null;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        myPosition = JSON.stringify(position);
        this.setState({userGpsPosition: myPosition});
      },
     (error) => alert(error.message),
     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.setState({screen: 2});
  }


  render() {
    var screen = this.state.screen;
    var el = null;
    switch (screen) {
      case 1:
        el =  (
                <section id="screen-1">
                  <h1>What's it like out there?</h1>
                  <div id="locations">
                    <button className="btn-green" onClick={() => this.useGPS()}>Use My Location</button>
                    <button className="btn-purple">ZIP Code Search</button>
                    <button className="btn-blue">Norfolk, VA, USA</button>
                    <button className="btn-blue">Tokyo, Japan</button>
                    <button className="btn-blue">Beijing, China</button>
                    <button className="btn-blue">Sao Paulo, Brazil</button>
                    <button className="btn-blue">Seoul, South Korea</button>
                    <button className="btn-blue">Delhi, India</button>
                  </div>
                </section>
              );
        break;
      case 2:
        el =  (
                <section id="screen-2">
                  <h1>It's fucking raining</h1>
                </section>
              )
        break;
      case 3:
        el =  (
                <section id="screen-3">
                  <h1>This is a 10 hour forecast for 1 day</h1>
                </section>
              )
        break;

    }
    return el;
  }
}

export default App;
