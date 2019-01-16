import React, { Component } from 'react';


class MovieList extends Component {

  constructor(props){
	  super(props)
	  const movies = [
		  {id: 0, title: "AA", desciption: "sdfkjsdfsd fsdf sf sdf sdf sdfsd fsdf sf sf sdf"},
		  {id: 1, title: "BB", desciption: "sdfkjsdfsd fsdf sf sdf sdf sdfsd fsdf sf sf sdf"},
	  ]
	  
	  var movieRows = []
	  movies.forEach((movie) => {
		  console.log(movie.title)
		  movieRows.push(<p>movie title: {movie.title}</p>)
	  })
	
		  this.state = {rows: movieRows}
  }	
  render() {
    return (
		 <li><div className="content-movies">
				<div className="poster"> <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg" alt="Aquaman" /> </div>
				<div className="wrapp-movie">
				  <div className="important">
					<h2>Aquaman</h2>
					<h4>December 21, 2018</h4>
				  </div>
				  <p className="description">Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.</p>
				  <div className="more-info">More info</div>
				</div></div>
			{this.state.rows}
			  </li>
    );
  }
}

export default MovieList;