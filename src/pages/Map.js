import React from 'react';
import './Multi.css';
import GoogleApiWrapper from "./location";

function Home() {
  return (
    <div>
        <div style={{paddingLeft:"270px"}}><h2>Map</h2></div>
        <div style={{paddingLeft:"270px"}} >
      <GoogleApiWrapper/>
      </div>
    </div>
  );
}

export default Home;
