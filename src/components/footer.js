import React, { Component } from 'react';

import logo from '../logo.svg';

class Foot extends Component {
  render() {
    return (

		  <footer>
			<nav>
			  <ul>
				<li class="first-footer"> <img src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="Movie DB" width="130" height="116"/> <a href="#">Join the community</a> </li>
				<li>
				  <h4>The basics</h4>
				  <a href="#">About TMDb</a> 
				  <a href="#">Contact Us </a> 
				  <a href="#">Support Forums</a> 
				  <a href="#">API</a> 
				  <a href="#">Blog</a> 
				</li>
				<li>
				  <h4>Get Involved</h4>
				  <a href="#">Contribution Bible</a> 
				  <a href="#">3rd Party Applications</a> 
				  <a href="#">Add New Movie</a> 
				  <a href="#">Add New TV Show</a> 
				</li>
				<li>
				  <h4>Community</h4>
				  <a href="#">Guidelines</a> 
				  <a href="#">Leaderboard</a> 
				  <a href="#">Forums</a> 
				  <a href="#">Twitter</a> 
				  <a href="#">Facebook</a> 
				</li>
				<li>
				  <h4>Legal</h4>
				  <a href="#">Terms of Use</a> 
				  <a href="#">Privacy Policy</a> 
				</li>
			  </ul>
			</nav>
		  </footer>
    );
  }
}

export default Foot;