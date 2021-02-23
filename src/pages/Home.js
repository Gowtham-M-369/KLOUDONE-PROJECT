import React from 'react';
import MultiAxisLine from './Multi.js';
import './Multi.css'

function Home() {
  return (
    <div>
        <div style={{paddingLeft:"270px"}}><h1>Dashboard</h1></div>
        <div style={{padding:"20px 0px 200px 40px"}} className="gap">
      <MultiAxisLine/>
      </div>
    </div>
  );
}

export default Home;
