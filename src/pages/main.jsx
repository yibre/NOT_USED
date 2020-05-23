import React from 'react';
import ReactDom from "react-dom";
import './main.css';
import "../libraries/flickity.pkgd";
import { Link } from 'react-router-dom';


function MainPage() {
    return (
      <div className="App">
        <header className="ACNH_Menu">
          <logo>ALL ABOUT ACNH</logo>
          <div className = "Header_right">
            <Link to = "/">home</Link>
            <Link to = "/login">login</Link>
          </div>
        </header>
        <div className = "Test">
          <div className = "Menu_left">
            <ul>
              <Link to="/villigers">VILLIGERS</Link>
              <hr className = "Horizon"></hr>
              <Link to="/items">ITMES</Link>
              <li><Link to="/items/clothes">CLOTHES</Link></li>
              <hr className = "Horizon"></hr>
              <li><Link to="/diylist">DIY LIST</Link></li>
              <li><Link to = "/diylist/furniture">FURNITURE</Link></li>
              <li><Link to = "/diylist/clothes">CLOTHES</Link></li>
              <li><Link to = "/diylist/etc">ET CEPTRA</Link></li>
              <li><Link to = "/diylist/seasons">SEASONS</Link></li>
              <hr className = "Horizon"></hr>
              <li><Link to="/museum">MUSEUM</Link></li>
              <li><Link to = "/museum/insect">INSECT</Link></li>
              <li><Link to = "/museum/fish">FISH</Link></li>
              <li><Link to = "/museum/fossil">FOSSIL</Link></li>
              <li><Link to = "/museum/art">ART</Link></li>
              <hr className = "Horizon"></hr>
              <li><Link to = "/community">COMMUNITY</Link></li>
              <li><Link to = "/community/mydesign">MY DESIGN</Link></li>
            </ul>
          </div>
          <div className = "Menu_right">
            <div className = "Official_site">
              Official site banner
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

  /* 닌텐도 스위치 오피셜 사이트용 로고 주소 (이미지 url)
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.change.org%2Fp%2Fnintendo-%25EB%258B%258C%25ED%2585%2590%25EB%258F%2584-%25EC%258A%25A4%25EC%259C%2584%25EC%25B9%2598-%25ED%2595%259C%25EA%25B5%25AD-%25EC%25B6%259C%25EC%258B%259C-%25EB%25B6%2580%25ED%2583%2581%25EB%2593%259C%25EB%25A6%25BD%25EB%258B%2588%25EB%258B%25A4-%25E4%25BB%25BB%25E5%25A4%25A9%25E5%25A0%2582%25E3%2582%25B9%25E3%2582%25A4%25E3%2583%2583%25E3%2583%2581%25E3%2581%25AE%25E9%259F%2593-%25E5%25B8%2582%25E5%25A0%25B4-%25E8%25A1%25A8%25E3%2581%258A%25E9%25A1%2598%25E3%2581%2584%25E3%2581%2597%25E3%2581%25BE%25E3%2581%2599-nintendo-switch-korea-please&psig=AOvVaw39c8Kj3dV2WVXdE7xgwdny&ust=1590153088411000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjDsoOExekCFQAAAAAdAAAAABAD
  */