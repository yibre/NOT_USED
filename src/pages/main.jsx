import React from 'react';
import './main.css';
import "../libraries/flickity.pkgd";
import { Link } from 'react-router-dom';


function MainPage() {
    return (
      <div className="App">
        <header className="ACNH_Menu">
          <logo></logo>
          <text>ALL ABOUT ACNH</text>
          <Link to = "/">home</Link>
        </header>
        <div className = "Test">
          <div className = "Menu_left">
            <ul>
              <li><Link to="villigers">VIILIGERS</Link></li>
              <li><Link to="items">ITMES</Link></li>
              <li><Link to="diylist">DIY LIST</Link></li>
              <li><Link to="museum">MUSEUM</Link></li>
              <li><Link to="community">COMMUNITY</Link></li>
            </ul>
          </div>
          <div className = "Menu_right">
            <div className="gallery js-flickity"
              data-flickity-options='{ "wrapAround": true }'>
              <div class="gallery-cell">VIILIGERS</div>
              <div class="gallery-cell">ITEMS</div>
              <div class="gallery-cell">DIY LIST</div>
              <div class="gallery-cell">MUSEUM</div>
              <div class="gallery-cell">COMMUNITY</div>
            </div>
            <div className = "Status">
              Things that you can catch now
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainPage;