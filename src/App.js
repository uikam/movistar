import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';



//COMPONENTS
import Header from './components/header';
import MovieList from './components/movie-list';
import Foot from './components/footer';

class App extends Component {
  render() {
    return (
		<div className="App">
		  <Header />
		  <input className="searcher" type="text" placeholder="&#xe93f; Search for a movie, tv show, person..."/>
		  <section>
			<h1>Popular Movies</h1>
			<div className="btns">
			  <div className="btn">Filter</div>
			</div>
			<ul className="movies">
		  	  <MovieList />
		  	  <MovieList />
		  	  <MovieList />
		  	  <MovieList />
		  	  <MovieList />
		  	  <MovieList />
			</ul>
		  </section>
		  <Foot />
		</div>
    );
  }
}

export default App;
