var a;
function username() {
  a = document.getElementById("name").value
  localStorage.setItem('uName',a);
  location.href = "two.html"
}
