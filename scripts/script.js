const BODY = document.getElementsByTagName("body")[0];
const INPT = document.getElementById("inpt")
const BTN = document.getElementById("decrypt");

const PAGE =
  "U2FsdGVkX1+4SExk5j9WOX8a3jvTCRX4tLjoVPBKRx+3MshvJC9Pldh2WUySrwotVPWmAXRfhN9w80N+KILjh/bV9TFW/nz5dRWgi4JT/g6P6qAoR/9c6msqLuQtnV8H";

function decrypt_btn() {
  BODY.innerHTML = decrypt(PAGE, INPT.value);
}

BTN.addEventListener("click", function () {
  decrypt_btn();
});
