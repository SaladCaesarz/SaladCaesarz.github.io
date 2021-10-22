var a;
function getName() {
  //get value from the input field
  a = document.getElementById("username").value;
  //create LS key with value of "a"
  localStorage.setItem('uName',a);
  //move the user to page two.html
  location.href = "two.html";
}

function getUser() {
  var b = localStorage.getItem('uName');
  document.getElementById("placeholder").innerHTML = "Hello " + b
}

