/* async runtime */
(async () => {
  // get port and key data
  const res = await fetch('./get-info');
  const data = await res.json();
  console.log(data);
  const {port, key} = data;
  // port and key are names of the properties set in the index.js file line 15, called object destructuring
  // same thing as: const port = data.port; const key = data.key;

  // display port number
  if (port) {
    const portText = `website served from port ${port}`;
    document.querySelector(".port-info").innerHTML = portText;
  }

  // show secret if key is present
  if (key) {
    const secretDiv = document.querySelector('.secret');
    const secretURL = `https://bit.ly/${key}`;
    const secretImage = `<img src="${secretURL}" alt="a secret???">`;
    secretDiv.innerHTML = secretImage;
  }

})();