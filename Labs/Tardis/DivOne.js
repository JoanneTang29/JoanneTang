// import React from 'react';

class DivOne extends React.Component {
  render() {
    return (
      <div>
        <h3 onClick={(e) => this.changeIt(this.state.tardis.name)}>
          {this.state.tardis.name}
        </h3>
      </div>
    );
  }
}

export default DivOne;
