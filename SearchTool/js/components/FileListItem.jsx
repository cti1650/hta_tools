class FileListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        no: props.no,
        name: props.name || 'name',
        path: props.path || 'path',
        ...props
      };
    }

    render() {
      return (
        <div>
      <li key={this.state.no}>
        <div className="text-gray-500 text-xs pb-0 mb-0">{this.state.path}</div>
        <div className="text-black text-xl pl-2 pt-0 mt-0">{this.state.name}</div>
      </li>
      </div>
      )
    }
  }