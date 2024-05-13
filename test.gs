function myFunction() {
  let response = UrlFetchApp.fetch('https://laravel-bbs.com/');
  let content = response.getContentText("utf-8");
  var anchors = Parser.data(content).from('<a').to('</a>').iterate();

  var urls = anchors.map((a) => {
    return Parser.data(a).from('href="').to('"').build();
  })
  console.log(urls);
}

function regFunction() {
  let response = UrlFetchApp.fetch('https://laravel-bbs.com/');
  let content = response.getContentText("utf-8");
  
  var regex = /<a.*?href=\"(.*?)\".*?<\/a>/gi;
  let match;
  var urls = [];
  while (match = regex.exec(content)) {
    urls.push(match[1]);
  }
  console.log(urls);
}
