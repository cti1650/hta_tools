class VoteButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { voted: false };
    }

    render() {
      if (this.state.voted) {
        return (
          <button onClick={()=> this.setState({ voted: false })}>
          voted
          </button>
        )
      } else {
        return (
          <button onClick={()=> this.setState({ voted: true })}>
          vote
          </button>
        );
      }
    }
  }