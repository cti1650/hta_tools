var jsonData = [];
function fileSearch(str, curPath) {
  try {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var files = fso.GetFolder(curPath).Files;
    var e = new Enumerator(files);
    for (; !e.atEnd(); e.moveNext()) {
      var file = e.item();
      if (file.name.indexOf(str) != -1) {
        var dla = new Date(file.DateLastAccessed);
        jsonData.push({
          name: file.name,
          path: file.path,
          accessed: dla.toString(),
        });
      }
    }
    var files = fso.GetFolder(curPath).SubFolders;
    var e = new Enumerator(files);
    for (; !e.atEnd(); e.moveNext()) {
      var folda = e.item();
      if (folda.name.indexOf(str) != -1) {
        var dla = new Date(folda.DateLastAccessed);
        jsonData.push({
          name: folda.name,
          path: folda.path,
          accessed: dla.toString(),
        });
      }
    }
  } catch (e) {
    jsonData = [
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
      {
        name: "file4.name",
        path: "file2.path",
        accessed: "dla.toString()",
      },
      {
        name: "file5.name",
        path: "file2.path",
        accessed: "dla.toString()",
      },
      {
        name: "file6.name",
        path: "file2.path",
        accessed: "dla.toString()",
      },
    ];
  }
  return jsonData;
}
