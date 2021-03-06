class FileList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props
      };
    }
    render() {
      return (
      <ul className="flex flex-col space-y-1 bg-white divide-y divide-gray-400">
        {this.props.items.map((data, index) => {
            return (
              <FileListItem key={index} no={index} name={data.name} path={data.path} />
            );
        })}
      </ul>
      )
    }
  }