<div align="center" width="100%">
  <img src="https://github.com/zaqks/public_web_encryption/blob/42bc1c35cb2448c65d64c569c6468f80b90397a4/docs/Screen%20Shot%202024-09-15%20at%2023.58.43.png">
</div>

# public_web_encryption

<p>
  This is a simple implementation of a public webpage encrypted with a key use the crpyto-js library.<br>
  The content is stored as a token and can't be viewed until decrypted by the visitor.<br>
  This method allows the hosting of sensitive material statically without using an API for authentication, but it's still possible to brute force it like anyother password protected ressources.<br>
  All the visitor has to do is input the right combination in order to view the web content.
</p>



# crypto use example

<h2>Dependencies</h2>

<p>
  inlude the files below following their order:
  
</p>

<ul>
  <li>

    scripts/crypto-js.min/crypto-js.min.js
  </li>
  <li>
    
    scripts/crypto.js
  </li>
</ul>






<h2>Example</h2>


```javascript
const MY_SECRET_DATA = "hehe"
const SECRET_KEY = "hi peanut";

//encryption
const encrypted_data = encrypt(MY_SECRET_DATA, SECRET_KEY); 

//decryption
const decrypted_data = decrypt(MY_SECRET_DATA, SECRET_KEY);
```


