const sock = document.getElementById("sock");
const message = document.getElementById("message");

sock.addEventListener("mouseover", function showMessage(){
  message.style.visibility = "visible";
})
sock.addEventListener("mouseout", function hideMessage(){
  message.style.visibility = "hidden";
})