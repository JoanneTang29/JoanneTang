// import React from 'react';
import DivOne from './DivOne';

class DivTwo extends React.Component {
  render() {
    return <div></div>;
  }
}

class DivThree extends React.Component {
  render() {
    return <div></div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      },
    };
  }

  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <DivOne changeIt={this.changeIt} tardis={this.state.tardis} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
