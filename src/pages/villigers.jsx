import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/villigers.css';

class Villigers extends Component {
    render(){
        return (
            <div className = "Screen">
                <div className = "Menu_top">
                    All about ACNH
                    <Link to = "/">Home</Link>
                </div>
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
                    Villigers
                    <div className = "Index_navigator"></div>
                </div>
            </div>
        );
    }
}

export default Villigers;