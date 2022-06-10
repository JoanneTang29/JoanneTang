// 1. Import React
import React from 'react';

// 2. Additional imports

// 3. Create component
class MovieInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.searchResult.Title}</h1>
        <h2>Year: {this.props.searchResult.Year}</h2>
        <img
          src={this.props.searchResult.Poster}
          alt={this.props.searchResult.Title}
        />
        <h3>Genre: {this.props.searchResult.Genre}</h3>
        <h4>Plot: {this.props.searchResult.Plot}</h4>
      </div>
    );
  }
}

// 4. Export component
export default MovieInfo;
