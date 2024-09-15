const STYLE = document.getElementById("style");

const BODY = document.getElementsByTagName("body")[0];

const INPT = document.getElementById("inpt");
const BTN_1 = document.getElementById("decrypt");
const BTN_2 = document.getElementById("decrypt_2");

const PAGE =
  "U2FsdGVkX1+4SExk5j9WOX8a3jvTCRX4tLjoVPBKRx+3MshvJC9Pldh2WUySrwotVPWmAXRfhN9w80N+KILjh/bV9TFW/nz5dRWgi4JT/g6P6qAoR/9c6msqLuQtnV8H";

function decrypt_btn() {
  try {
    BODY.innerHTML = decrypt(PAGE, INPT.value);
    STYLE.remove();
  } catch (error) {}
}

function decrypt_btn_2() {
  try {
    decrypt_btn();
    //save the token
  } catch (error) {}
}

BTN_1.addEventListener("click", function () {
  decrypt_btn();
});

BTN_2.addEventListener("click", function () {
  decrypt_btn_2();
});


delete_cookie("csrftoken")