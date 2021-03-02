function loadTitleInfo() {
  var x;
  // Get the value of the input field with id="searchT"
  x = document.getElementById("filterName").innerHTML;
  var res = x.replace("MOVIE", "SOUL");
  document.getElementById("filterName").innerHTML = res;
  loadTitleName();
  loadTitleRating();
  loadTitleData();
}

function loadTitleName() {
  var x;
  // Get the value of the input field with class="title-name"
  x = document.getElementsByClassName("title-name")[0].innerHTML;
  var res = x.replace("MOVIE", "SOUL");
  document.getElementsByClassName("title-name")[0].textContent = res;
}

function loadTitleRating() {
  var x;
  // Get the value of the input field with class="rating"
  x = document.getElementsByClassName("rating")[0].innerHTML;
  var res = x.replace("X", "PG");
  document.getElementsByClassName("rating")[0].textContent = res;
}

function loadTitleData() {
  var time = "1hr 47min";
  var genre = "Drama/Animation";
  var date = "25 December 2020";
  var info = time + " | " + genre + " | " + date;
  // Get the value of the input field with class="title-name"
  var x = document.getElementsByClassName("title-data")[0].innerHTML;

  //var res = x.replace("X", "PG");
  document.getElementsByClassName("title-data")[0].textContent = info;
}
