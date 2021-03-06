const json = [
  {
    name: "test1",
  },
  {
    name: "test2",
  },
  {
    name: "test3",
  },
];
const test_items = [
  {
    name: "file1.name",
    path: "file.path",
    accessed: "dla.toString()",
  },
  {
    name: "file2.name",
    path: "file.path",
    accessed: "dla.toString()",
  },
  {
    name: "file3.name",
    path: "file.path",
    accessed: "dla.toString()",
  },
];
ReactDOM.render(
  <div>
    <SearchBox items={test_items} />
  </div>,
  document.getElementById("app")
);
