chrome.webRequest.onBeforeRequest.addListener(
  function(details) 
  {
    let imgurpLink;
    if(details.url.includes('imgur') && !details.url.includes('imgurp')){
      imgurpLink = details.url.replace('imgur', 'imgurp');
    }
    return {redirectUrl: imgurpLink};
  },
  {
      urls: ["*://*/*"],
  },
  ["blocking"]
)

// source https://github.com/wiidat/imgur-to-filmot
chrome.tabs.onUpdated.addListener(function (){
  var a = document.getElementsByTagName('a');
  for (i=0;i<a.length;i++) {
      p = /imgur\.com\/([\S]+)/;
      res = p.exec(a[i]);
      
      if (res!=null) {
          a[i].href = 'http://i.imgurp.com/' + res[1];
      }
}})
