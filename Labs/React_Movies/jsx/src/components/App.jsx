// 1. Import react
import React from 'react';
// 2. Additional imports
import MovieInfo from './MovieInfo';

// 3. Create component
class App extends React.Component {
  // Add a state to our path
  state = {
    baseURL: 'http://www.omdbapi.com/?',
    apikey: 'apikey=' + 'b9655be6',
    query: '&t=',
    movieTitle: '',
    searchURL: '',
  };

  ///// Methods
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle,
      },
      () => {
        fetch(this.state.searchURL)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Find Movie Info" />
        </form>
        <MovieInfo />
        <a href={this.state.searchURL}>{this.state.searchURL}</a>
      </>
    );
  }
}

// 4. Export component
export default App;
