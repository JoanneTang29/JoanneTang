// 1. Import React
import React from 'react';
import MovieInfo from './MovieInfo';

// 2. Additional imports

// 3. Create component
class OMDBQueryForm extends React.Component {
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
            this.setState({
              searchResult: data,
            });
          })
          .catch((error) => {
            console.error(error.message);
          })
          // this is how you put a loader spinner
          .finally(() => {
            this.setState({
              movieTitle: '',
            });
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
          <input
            type="submit"
            value="Find Movie Info"
            disabled={!this.state.movieTitle ? true : false}
          />
        </form>
        {this.state.searchResult ? (
          <MovieInfo searchResult={this.state.searchResult} />
        ) : (
          ''
        )}
      </>
    );
  }
}

// 4. Export component
export default OMDBQueryForm;
