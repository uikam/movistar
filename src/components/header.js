import React, { Component } from 'react';

import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
		  <header className="App-header"> <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
			<nav className="nav-initial">
			  <ul>
				<li><a href="#">DISCOVER</a></li>
				<li><a href="#">MOVIES</a></li>
				<li><a href="#">TV SHOWS</a></li>
				<li><a href="#">PEOPLE</a></li>
			  </ul>
			  <ul className="others-nav">
				<li><a href="#">&#xe90d;</a></li>
				<li><a href="#" className="trasl">EN</a></li>
				<li><a href="#">LOGIN</a></li>
				<li><a href="#">SIGN UP </a></li>
			  </ul>
			</nav>
		  </header>
    );
  }
}

export default Header;