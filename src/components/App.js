import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import allMovies from "../movies";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [allMovies],
      visiable: 4,
    };
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  }

  loadAdditionalMovies() {
    this.setState((prev) => {
      return { visiable: prev.visiable + 4 };
    });
  }

  render() {
    return (
      <div className="App">
        <Header text="Ryan's movie JoJo App" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {Object.keys(this.state.movies)
            .slice(0, this.state.visiable)
            .map((key) => (
              <Movie key={key} meta={this.state.movies[key]} />
            ))}
        </div>
        <div className="add-movies">
          {this.state.visiable < this.state.movies.length && (
            <button onClick={this.loadAdditionalMovies}>Load more</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
