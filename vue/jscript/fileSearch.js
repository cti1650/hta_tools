var jsonData = [];
function getStringFromDate(date) {
  var year = date.getFullYear();
  // 1月=0、2月=1の順に値が返されるので、月だけ+1にする
  var month = 1 + date.getMonth();
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  format = "YYYY-MM-DD hh:mm:ss";
  format = format.replace(/YYYY/g, year);
  format = format.replace(/MM/g, month);
  format = format.replace(/DD/g, day);
  format = format.replace(/hh/g, hour);
  format = format.replace(/mm/g, minute);
  format = format.replace(/ss/g, second);

  return format;
}
function fileSearch(curPath) {
  try {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var files = fso.GetFolder(curPath).Files;
    var e = new Enumerator(files);
    for (; !e.atEnd(); e.moveNext()) {
      var file = e.item();
      var dla = new Date(file.DateLastAccessed);
      jsonData.push({
        name: file.name,
        path: file.path,
        accessed: getStringFromDate(dla),
      });
    }
    var files = fso.GetFolder(curPath).SubFolders;
    var e = new Enumerator(files);
    for (; !e.atEnd(); e.moveNext()) {
      var folda = e.item();
      var dla = new Date(folda.DateLastAccessed);
      jsonData.push({
        name: folda.name,
        path: folda.path,
        accessed: getStringFromDate(dla),
      });
    }
  } catch (e) {
    jsonData = [
      {
        name: "file1.name",
        path: "file.path",
        accessed: getStringFromDate(now()),
      },
      {
        name: "file2.name",
        path: "file.path",
        accessed: getStringFromDate(now()),
      },
      {
        name: "file3.name",
        path: "file.path",
        accessed: getStringFromDate(now()),
      },
      {
        name: "file4.name",
        path: "file2.path",
        accessed: getStringFromDate(now()),
      },
      {
        name: "file5.name",
        path: "file2.path",
        accessed: getStringFromDate(now()),
      },
      {
        name: "file6.name",
        path: "file2.path",
        accessed: getStringFromDate(now()),
      },
    ];
  }
  return jsonData;
}
