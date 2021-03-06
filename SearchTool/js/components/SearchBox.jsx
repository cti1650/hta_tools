class SearchBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value:props.value || "Search Tool",
        keyword:"",
        defitems:props.items,
        items:props.items,
        ...props
      };
    }
    render() {
      const {state} = this;
      return (
        <div>
      <SearchTextbox
      onChange={(e) => {
        let ans = [];
        let arr = state.defitems;
        console.log(e);
        arr.map((data) => {
          if(data.name.indexOf(e) != -1){
            ans.push(data);
          }
        });
        console.log(ans)
        this.setState({keyword:e,items:ans});
      }}
      value={state.keyword}
    />
    <FileList keyword={state.keyword} items={state.items} />
      </div>
      )
    }
  }