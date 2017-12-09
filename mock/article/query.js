String.prototype.rand = function () {
  return this[Math.floor(Math.random() * this.length)];
};

module.exports = function a(req, res) {

  var data = []
  for (i = 1; i <= 100; i++) {
    data.push(
      {
        id: i,
        title: 'Kotlin + Spring Boot: Next J2EE Develpment',
        author: 'Jack'
      }
    )
  }

  let searchTxt = req.query.searchTxt;
  console.log("searchTxt = " + searchTxt)
  if (searchTxt != undefined && searchTxt != null && searchTxt != '') {
    var result = []
    for (j = 0; j < data.length; j++) {
      var text = data[j].id + data[j].title + data[j].author;
      if (text.indexOf(searchTxt) > -1) {
        result.push(data[j])
      }
    }
  } else {
    result = data
  }

  let pageSize = req.query.pageSize ? 10 : req.query.pageSize;
  let currentPage = req.query.currentPage ? 1 : req.query.currentPage;
  console.log("pageSize = " + pageSize)
  console.log("currentPage = " + currentPage)

  res.end(JSON.stringify({
    success: true,
    content: {
      currentPage: currentPage,
      pageSize: pageSize,
      totalCount: 100,
      data: result
    }
  }));

};


