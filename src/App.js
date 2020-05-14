import React from 'react';
import './App.css';
import './homeSwipe';


function App() {
  return (
    <div className="App">
      <header className="ACNH_Menu">
        <logo></logo>
        <text>ALL ABOUT ACNH</text>
      </header>
      <p>AD</p>
      <div className = "Test">
        <div className = "Menu_left"></div>
        <div className = "Menu_right">
          <div className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
          </div>
          <div className = "Status"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
