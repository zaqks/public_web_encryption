function get_cookie(key) {
  var tkn;
  var value;

  for (tkn of document.cookie.split("; ")) {
    [tkn, value] = tkn.split("=");
    if (tkn == key) return value;
  }

  return null;
}
