class SearchTextbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value:props.value || "Search Tool",
        ...props
      };
    }
    render() {
      const {state} = this;
      return (
        <div>
      <p className="border-black border-l-8 border-b my-2 py-1 pl-4 h-auto">
      <input
        type="text"
        className="text-xl text-left py-1 pl-2 tracking-widest border-white border-0 w-full"
        onChange={(e)=>{this.setState({value:e.target.value});return this.props.onChange(e.target.value)}}
        value={state.value}
      />
    </p>
      </div>
      )
    }
  }