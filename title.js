function loadTitle() {
  var x;
  // Get the value of the input field with id="searchT"
  x = document.getElementById("filterName").innerHTML;
  var res = x.replace("MOVIE", "SOUL");
  document.getElementById("filterName").innerHTML = res;
  loadTitleName();
}

function loadTitleName() {
  var x;
  // Get the value of the input field with class="title-name"
  x = document.getElementsByClassName("title-name")[0].innerHTML;
  var res = x.replace("MOVIE", "SOUL");
  document.getElementsByClassName("title-name")[0].textContent = res;
}
