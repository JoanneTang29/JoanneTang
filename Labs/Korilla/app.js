class Receipt extends React.Component {
  state = {
    paid: false,
  };

  handlePaidToggle = (person) => {
    console.log('handle paid toggle', person);
    console.log(this.state.receipts);
    if (this.state.paid) {
      this.setState({
        paid: false,
      });
    } else {
      this.setState({ paid: true });
    }
    // this.setState({
    //   paid: !this.state.paid,
    // });
  };

  render() {
    console.log(this.state.paid);
    return (
      <div>
        <h2>{this.props.receipt.person}</h2>
        <h5>
          <span>Main: </span>
          {this.props.receipt.order.main}
        </h5>
        <h5>
          <span>Protein: </span>
          {this.props.receipt.order.protein}
        </h5>
        <h5>
          <span>Rice: </span>
          {this.props.receipt.order.sauce}
        </h5>
        <h5>
          <span>Drink: </span>
          {this.props.receipt.order.drink}
        </h5>
        <h5>
          <span>Cost: </span>
          {this.props.receipt.order.cost}
        </h5>
        <h5>
          Paid: <span>{this.state.paid ? 'Yes' : 'No'}</span>
        </h5>
        <button
          onClick={() => {
            this.handlePaidToggle(this.state.receipt.person);
          }}
        >
          Paid
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receipts: receipts,
    };
  }
  render() {
    return (
      <div>
        <h1 className="truck-name">Korilla</h1>
        <div className="receipt-container">
          {this.state.receipts.map((receipt) =>
            receipt.paid ? '' : <Receipt receipt={receipt} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
