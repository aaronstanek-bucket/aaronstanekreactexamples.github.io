// copied from https://www.w3schools.com/js/js_cookies.asp
function getCookie() {
  var cname = "page2";
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      let value = c.substring(name.length, c.length);
      return JSON.parse(value);
    }
  }
  return {};
}

function setCookie(value) {
  var s = JSON.stringify(value);
  console.log("setting cookie",s);
  document.cookie = "page2=" + s + ";path=/;";
}