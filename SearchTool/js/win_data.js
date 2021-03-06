function test(str) {
  document.getElementById("contents").innerHTML = "";
  let fso = new ActiveXObject("Scripting.FileSystemObject");
  let arr = [];
  if (fso) {
    curPath = "./";
    // 指定パスのファイル一覧を得る
    var files = fso.GetFolder(curPath).Files;
    // ファイルを一つずつ処理する
    var e = new Enumerator(files);
    for (; !e.atEnd(); e.moveNext()) {
      let file = e.item();
      var dla = new Date(file.DateLastAccessed);
      arr.push({
        name: file.name,
        path: file.path,
        accessed: dla.toString(),
      });
    }
  } else {
    arr = [
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
  }
  return arr;
}
