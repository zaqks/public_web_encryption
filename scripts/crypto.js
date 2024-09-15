function encrypt(mssg, key) {
  return CryptoJS.AES.encrypt(mssg, key).toString();
}

function decrypt(token, key){
    const bytes = CryptoJS.AES.decrypt(token, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

