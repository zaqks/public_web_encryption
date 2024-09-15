function get_cookie(key) {
  var tkn;
  var value;

  for (tkn of document.cookie.split("; ")) {
    [tkn, value] = tkn.split("=");
    if (tkn == key) return value;
  }

  return null;
}

function set_cookie(key, val) {
  document.cookie = `${key}=${val}`;
}

function delete_cookie(key) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
